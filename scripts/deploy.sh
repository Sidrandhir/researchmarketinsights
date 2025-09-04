#!/bin/bash

# Production Deployment Script for Research Market Insights
# This script handles the complete deployment process

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
PROJECT_DIR="/root/researchmarketinsights"
BACKUP_DIR="/root/backups"
LOG_FILE="/var/log/deployment.log"

# Function to log messages
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
    exit 1
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    error "Please run as root"
fi

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Function to backup current deployment
backup_current() {
    log "Creating backup of current deployment..."
    
    BACKUP_NAME="backup-$(date +%Y%m%d-%H%M%S)"
    BACKUP_PATH="$BACKUP_DIR/$BACKUP_NAME"
    
    if [ -d "$PROJECT_DIR" ]; then
        cp -r "$PROJECT_DIR" "$BACKUP_PATH"
        success "Backup created at $BACKUP_PATH"
    else
        warning "No existing deployment found to backup"
    fi
}

# Function to pull latest code
pull_code() {
    log "Pulling latest code from repository..."
    
    cd "$PROJECT_DIR" || error "Project directory not found"
    
    # Fetch latest changes
    git fetch origin main || error "Failed to fetch from repository"
    
    # Check if there are new commits
    LOCAL=$(git rev-parse HEAD)
    REMOTE=$(git rev-parse origin/main)
    
    if [ "$LOCAL" = "$REMOTE" ]; then
        warning "No new commits found. Deployment may not be necessary."
        read -p "Continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            log "Deployment cancelled by user"
            exit 0
        fi
    fi
    
    # Pull latest changes
    git pull origin main || error "Failed to pull latest code"
    success "Code updated successfully"
}

# Function to install dependencies
install_dependencies() {
    log "Installing dependencies..."
    
    cd "$PROJECT_DIR"
    
    # Clean install
    rm -rf node_modules package-lock.json
    npm install --production || error "Failed to install dependencies"
    
    success "Dependencies installed successfully"
}

# Function to run database migrations
run_migrations() {
    log "Running database migrations..."
    
    cd "$PROJECT_DIR"
    
    # Generate Prisma client
    npm run db:generate || error "Failed to generate Prisma client"
    
    # Run migrations
    npm run db:migrate || error "Failed to run database migrations"
    
    success "Database migrations completed"
}

# Function to build the application
build_application() {
    log "Building application..."
    
    cd "$PROJECT_DIR"
    
    # Build the Next.js application
    npm run build || error "Failed to build application"
    
    success "Application built successfully"
}

# Function to restart services
restart_services() {
    log "Restarting services..."
    
    # Restart PM2 process
    pm2 restart market-research-app || error "Failed to restart PM2 process"
    
    # Restart Nginx
    systemctl reload nginx || error "Failed to reload Nginx"
    
    success "Services restarted successfully"
}

# Function to run health checks
health_check() {
    log "Running health checks..."
    
    # Wait for application to start
    sleep 10
    
    # Check if application is responding
    if curl -f -s http://localhost:3000 > /dev/null; then
        success "Application is responding"
    else
        error "Application health check failed"
    fi
    
    # Check if Nginx is serving the application
    if curl -f -s http://localhost > /dev/null; then
        success "Nginx is serving the application"
    else
        error "Nginx health check failed"
    fi
}

# Function to cleanup old backups
cleanup_backups() {
    log "Cleaning up old backups..."
    
    # Keep only last 5 backups
    cd "$BACKUP_DIR"
    ls -t | tail -n +6 | xargs -r rm -rf
    
    success "Old backups cleaned up"
}

# Function to rollback deployment
rollback() {
    log "Rolling back deployment..."
    
    # Find latest backup
    LATEST_BACKUP=$(ls -t "$BACKUP_DIR" | head -n 1)
    
    if [ -z "$LATEST_BACKUP" ]; then
        error "No backup found for rollback"
    fi
    
    # Stop current application
    pm2 stop market-research-app || true
    
    # Restore from backup
    rm -rf "$PROJECT_DIR"
    cp -r "$BACKUP_DIR/$LATEST_BACKUP" "$PROJECT_DIR"
    
    # Restart application
    cd "$PROJECT_DIR"
    pm2 start ecosystem.config.js
    
    success "Rollback completed to backup: $LATEST_BACKUP"
}

# Main deployment function
deploy() {
    log "Starting deployment process..."
    
    # Check if rollback is requested
    if [ "$1" = "rollback" ]; then
        rollback
        exit 0
    fi
    
    # Run deployment steps
    backup_current
    pull_code
    install_dependencies
    run_migrations
    build_application
    restart_services
    health_check
    cleanup_backups
    
    success "🎉 Deployment completed successfully!"
    
    # Show deployment summary
    echo ""
    echo "📊 Deployment Summary:"
    echo "  - Application URL: http://$(curl -s ifconfig.me)"
    echo "  - PM2 Status: $(pm2 status market-research-app --no-color | grep market-research-app)"
    echo "  - Nginx Status: $(systemctl is-active nginx)"
    echo "  - Database: Connected"
    echo ""
}

# Handle command line arguments
case "${1:-deploy}" in
    "deploy")
        deploy
        ;;
    "rollback")
        rollback
        ;;
    "health")
        health_check
        ;;
    "backup")
        backup_current
        ;;
    *)
        echo "Usage: $0 {deploy|rollback|health|backup}"
        echo ""
        echo "Commands:"
        echo "  deploy   - Full deployment process (default)"
        echo "  rollback - Rollback to previous version"
        echo "  health   - Run health checks"
        echo "  backup   - Create backup of current deployment"
        exit 1
        ;;
esac



