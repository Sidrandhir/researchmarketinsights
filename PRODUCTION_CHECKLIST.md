# 🚀 Production Deployment Checklist

## Pre-Deployment Checklist

### ✅ Environment Configuration
- [ ] Copy `.env.example` to `.env.local`
- [ ] Set `DATABASE_URL` with production database
- [ ] Set `NEXTAUTH_SECRET` (32+ characters)
- [ ] Set `NEXTAUTH_URL` to production domain
- [ ] Configure email settings (if using email features)
- [ ] Set up payment keys (if using Stripe)
- [ ] Configure file upload limits
- [ ] Set up monitoring and analytics IDs

### ✅ Database Setup
- [ ] Create production PostgreSQL database
- [ ] Run database migrations: `npm run db:migrate:prod`
- [ ] Seed initial data: `npm run db:seed`
- [ ] Create database indexes: `psql -d your_db -f prisma/migrations/001_add_indexes.sql`
- [ ] Set up database backups
- [ ] Configure connection pooling

### ✅ Security Configuration
- [ ] Update CORS settings for production domain
- [ ] Configure rate limiting
- [ ] Set up SSL/TLS certificates
- [ ] Configure security headers
- [ ] Set up file upload validation
- [ ] Enable CSRF protection
- [ ] Configure session security

### ✅ Server Configuration
- [ ] Install Node.js 18+ on server
- [ ] Install PM2 globally: `npm install -g pm2`
- [ ] Install Nginx
- [ ] Configure Nginx reverse proxy
- [ ] Set up SSL with Let's Encrypt
- [ ] Configure firewall rules
- [ ] Set up log rotation

### ✅ Application Deployment
- [ ] Clone repository to server
- [ ] Install dependencies: `npm install --production`
- [ ] Build application: `npm run build`
- [ ] Start with PM2: `npm run pm2:start`
- [ ] Configure PM2 to start on boot
- [ ] Test application endpoints

## Post-Deployment Checklist

### ✅ Functionality Testing
- [ ] Test homepage loads correctly
- [ ] Test admin login functionality
- [ ] Test Excel upload feature
- [ ] Test report generation
- [ ] Test database connections
- [ ] Test API endpoints
- [ ] Test file downloads
- [ ] Test responsive design

### ✅ Performance Testing
- [ ] Run Lighthouse audit
- [ ] Test page load speeds
- [ ] Monitor memory usage
- [ ] Check database query performance
- [ ] Test under load
- [ ] Optimize images and assets
- [ ] Enable caching

### ✅ Monitoring Setup
- [ ] Set up application monitoring
- [ ] Configure error tracking
- [ ] Set up uptime monitoring
- [ ] Configure log aggregation
- [ ] Set up performance monitoring
- [ ] Configure alerting
- [ ] Test monitoring systems

### ✅ Backup & Recovery
- [ ] Test database backups
- [ ] Test file backups
- [ ] Document recovery procedures
- [ ] Test rollback procedures
- [ ] Set up automated backups
- [ ] Test disaster recovery

## Production Commands

### Deployment
```bash
# Full deployment
npm run deploy

# Rollback if needed
npm run deploy:rollback

# Health check
npm run health
```

### PM2 Management
```bash
# Start application
npm run pm2:start

# Stop application
npm run pm2:stop

# Restart application
npm run pm2:restart

# View logs
npm run pm2:logs

# Check status
npm run pm2:status
```

### Database Management
```bash
# Run migrations
npm run db:migrate:prod

# Create backup
npm run db:backup

# Generate Prisma client
npm run db:generate
```

## Monitoring URLs

- **Application**: `https://yourdomain.com`
- **Health Check**: `https://yourdomain.com/api/health`
- **Admin Panel**: `https://yourdomain.com/admin`
- **Upload Reports**: `https://yourdomain.com/admin/upload-reports`

## Security Considerations

### ✅ SSL/TLS
- [ ] SSL certificate installed and valid
- [ ] HTTPS redirect configured
- [ ] HSTS headers enabled
- [ ] Certificate auto-renewal set up

### ✅ Access Control
- [ ] Admin accounts secured
- [ ] Strong passwords enforced
- [ ] Two-factor authentication (if applicable)
- [ ] Regular security updates

### ✅ Data Protection
- [ ] Database encrypted at rest
- [ ] File uploads validated
- [ ] User data protected
- [ ] GDPR compliance (if applicable)

## Performance Optimization

### ✅ Caching
- [ ] Browser caching configured
- [ ] CDN set up (if applicable)
- [ ] Database query caching
- [ ] Static asset optimization

### ✅ Database Optimization
- [ ] Indexes created and optimized
- [ ] Query performance monitored
- [ ] Connection pooling configured
- [ ] Regular maintenance scheduled

## Maintenance Schedule

### Daily
- [ ] Check application health
- [ ] Monitor error logs
- [ ] Check disk space
- [ ] Monitor performance metrics

### Weekly
- [ ] Review security logs
- [ ] Check backup integrity
- [ ] Update dependencies
- [ ] Performance analysis

### Monthly
- [ ] Security audit
- [ ] Database optimization
- [ ] Log cleanup
- [ ] Disaster recovery test

## Emergency Procedures

### Application Down
1. Check PM2 status: `pm2 status`
2. Restart application: `pm2 restart market-research-app`
3. Check logs: `pm2 logs market-research-app`
4. Check server resources: `htop`, `df -h`
5. Check database connectivity

### Database Issues
1. Check database status: `systemctl status postgresql`
2. Check database logs
3. Restore from backup if needed
4. Run database maintenance

### Security Incident
1. Isolate affected systems
2. Preserve logs and evidence
3. Notify stakeholders
4. Implement fixes
5. Review and improve security

## Contact Information

- **Technical Lead**: [Your Name] - [email]
- **DevOps**: [DevOps Contact] - [email]
- **Security**: [Security Contact] - [email]
- **Hosting Provider**: [Provider Contact]

---

**Last Updated**: [Date]
**Version**: 1.0.0
**Environment**: Production



