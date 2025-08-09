# Market Research Insights - Comprehensive Market Research Platform

A modern, professional, and responsive market research web application built with Next.js 14, TypeScript, Tailwind CSS, and Prisma. This platform provides comprehensive market research reports, industry analysis, and business intelligence across multiple industries and languages.

## 🌟 Features

### Frontend Features
- **Multi-language Support**: 8 languages (English, Chinese, Korean, Arabic, French, Spanish, German, Japanese)
- **Responsive Design**: Mobile-first approach with horizontal grids on mobile/tablet devices
- **Professional UI/UX**: Modern, clean design with smooth animations and transitions
- **SEO Optimized**: Meta tags, structured data, and search engine friendly URLs
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

### Backend Features
- **Database Integration**: PostgreSQL with Prisma ORM
- **API Routes**: RESTful APIs for all CRUD operations
- **File Upload**: Support for images, PDFs, and Excel files
- **Bulk Operations**: Upload/download functionality for reports and press releases
- **CRM Integration**: Lead tracking and management system
- **Analytics**: Dashboard with comprehensive statistics and insights

### Content Management
- **Static Pages**: Home, About, Privacy Policy, Terms, FAQ, Contact, Career
- **Dynamic Content**: Reports, Press Releases, Industry Categories
- **Form Handling**: Contact forms, sample requests, purchase forms
- **Content Editor**: Rich text editor for content management
- **Media Management**: Image upload and optimization

### SEO & Performance
- **XML Sitemaps**: Dynamic generation for all content types
- **Meta Tags**: Dynamic meta tags for all pages
- **Core Web Vitals**: Optimized for performance and user experience
- **AMP Support**: Accelerated Mobile Pages for better mobile performance
- **Search Optimization**: Advanced search functionality with filters

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/market-research-insights.git
   cd market-research-insights
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the environment variables in `.env.local`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/market_research"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Database setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
market-research-insights/
├── app/                          # Next.js 14 App Router
│   ├── [lang]/                   # Multi-language routes
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── reports/             # Reports pages
│   │   ├── press-releases/      # Press releases
│   │   ├── sample-request/      # Sample request form
│   │   ├── buy-now/            # Purchase form
│   │   └── ...                 # Other static pages
│   ├── admin/                   # Admin dashboard
│   ├── api/                     # API routes
│   │   ├── auth/               # Authentication
│   │   ├── contact/            # Contact form
│   │   ├── reports/            # Reports CRUD
│   │   ├── leads/              # Leads management
│   │   ├── upload/             # File upload
│   │   ├── bulk/               # Bulk operations
│   │   └── analytics/          # Analytics data
│   └── globals.css             # Global styles
├── components/                  # React components
│   ├── home/                   # Homepage components
│   ├── layout/                 # Layout components
│   └── ui/                     # UI components
├── lib/                        # Utility libraries
│   ├── auth.ts                 # Authentication config
│   ├── db.ts                   # Database connection
│   ├── i18n.ts                 # Internationalization
│   └── utils.ts                # Utility functions
├── prisma/                     # Database schema
│   └── schema.prisma           # Prisma schema
├── types/                      # TypeScript types
│   └── index.ts                # Type definitions
└── public/                     # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb) - Main brand color
- **Secondary**: Gray (#6b7280) - Supporting elements
- **Accent**: Purple (#7c3aed) - Highlights and CTAs
- **Success**: Green (#10b981) - Success states
- **Warning**: Yellow (#f59e0b) - Warning states
- **Error**: Red (#ef4444) - Error states

### Typography
- **Primary Font**: Inter - Clean, modern sans-serif
- **Secondary Font**: Poppins - For headings and emphasis
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Primary, secondary, and ghost variants
- **Forms**: Clean inputs with proper validation states
- **Navigation**: Sticky header with smooth transitions
- **Modals**: Backdrop blur, smooth animations

## 🌐 Multi-language Support

The application supports 8 languages with dynamic routing:

- **English** (`/en`) - Default language
- **Chinese** (`/zh`) - 中文
- **Korean** (`/ko`) - 한국어
- **Arabic** (`/ar`) - العربية
- **French** (`/fr`) - Français
- **Spanish** (`/es`) - Español
- **German** (`/de`) - Deutsch
- **Japanese** (`/jp`) - 日本語

### Language Configuration
```typescript
// lib/i18n.ts
export const languages = {
  en: 'English',
  zh: '中文',
  ko: '한국어',
  ar: 'العربية',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  jp: '日本語'
}
```

## 📊 Database Schema

### Core Models
- **User**: Authentication and user management
- **Report**: Market research reports with rich content
- **PressRelease**: Industry news and press releases
- **Lead**: CRM lead tracking and management
- **Order**: Purchase and order management
- **Sample**: Sample request management
- **StaticPage**: Static content management
- **Setting**: Application settings and configuration

### Key Relationships
- Reports belong to Users (authors)
- Samples belong to Reports
- Orders belong to Reports and Users
- Leads can be associated with Reports

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth.js authentication

### Content Management
- `GET /api/reports` - List reports with filters
- `POST /api/reports` - Create new report
- `GET /api/reports/[id]` - Get specific report
- `PUT /api/reports/[id]` - Update report
- `DELETE /api/reports/[id]` - Delete report

### Lead Management
- `GET /api/leads` - List leads with filters
- `POST /api/leads` - Create new lead
- `GET /api/leads/[id]` - Get specific lead
- `PUT /api/leads/[id]` - Update lead
- `DELETE /api/leads/[id]` - Delete lead

### File Operations
- `POST /api/upload` - File upload endpoint
- `POST /api/bulk` - Bulk operations (upload/download)

### Analytics
- `GET /api/analytics` - Dashboard analytics and statistics

## 🎯 Key Features Implementation

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Horizontal grids on mobile/tablet devices
- Flexible layouts that adapt to screen sizes
- Touch-friendly interface elements

### Professional UI/UX
- Modern design with gradients and shadows
- Smooth animations using Framer Motion
- Consistent spacing and typography
- Professional color scheme and branding

### SEO Optimization
- Dynamic meta tags for all pages
- Structured data markup
- XML sitemaps for all content types
- Optimized images and performance

### Content Management
- Rich text editor for content creation
- Image upload and optimization
- Bulk import/export functionality
- Version control and publishing workflow

## 🚀 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables
```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# Authentication
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="https://your-domain.com"

# File Upload
UPLOAD_DIR="/public/uploads"

# Email (optional)
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="your-email@example.com"
SMTP_PASS="your-password"
```

## 📈 Performance Optimization

### Core Web Vitals
- **LCP**: Optimized images and critical CSS
- **FID**: Minimal JavaScript and efficient event handling
- **CLS**: Stable layouts and proper image dimensions

### Caching Strategy
- Static page generation for better performance
- API response caching
- Image optimization and CDN integration

### Bundle Optimization
- Code splitting and lazy loading
- Tree shaking for unused code
- Optimized dependencies

## 🔒 Security

### Authentication
- NextAuth.js for secure authentication
- JWT tokens with proper expiration
- Role-based access control

### Data Protection
- Input validation and sanitization
- SQL injection prevention with Prisma
- XSS protection with proper escaping

### File Upload Security
- File type validation
- Size limits and virus scanning
- Secure file storage

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### Integration Tests
```bash
npm run test:integration
```

### E2E Tests
```bash
npm run test:e2e
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: support@marketresearchinsights.com
- Documentation: [docs.marketresearchinsights.com](https://docs.marketresearchinsights.com)
- Issues: [GitHub Issues](https://github.com/yourusername/market-research-insights/issues)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Prisma team for the excellent ORM
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide React for beautiful icons

---

**Built with ❤️ by the Market Research Insights team** 