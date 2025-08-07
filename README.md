# Market Research Insights Platform

A comprehensive market research website with multi-language support, admin dashboard, and full-stack functionality.

## 🌟 Features

### Frontend
- **Multi-language Support**: English, Chinese, Korean, Arabic, French, Spanish, German, Japanese
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Beautiful animations with Framer Motion
- **SEO Optimized**: XML sitemaps, robots.txt, meta tags
- **Static Pages**: Home, About, Contact, Industry, Press Releases
- **Dynamic Forms**: Contact, Sample Request, Buy Now, Enquiry

### Backend
- **Database**: PostgreSQL with Prisma ORM
- **API Routes**: Contact, Sample Request, Sitemap, Robots
- **Admin Dashboard**: User management, reports, analytics
- **CRM Integration**: Lead tracking and management
- **File Upload**: Support for images and documents

### SEO & Performance
- **Core Web Vitals**: Optimized for performance
- **XML Sitemaps**: Auto-generated for all languages
- **Meta Tags**: Comprehensive SEO metadata
- **Image Optimization**: Next.js Image component
- **AMP Support**: Mobile-optimized pages

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ResearchmarketInsight
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/market_research"
   
   # Authentication
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   
   # Email (optional)
   SMTP_HOST="smtp.gmail.com"
   SMTP_PORT="587"
   SMTP_USER="your-email@gmail.com"
   SMTP_PASS="your-app-password"
   
   # Stripe (optional)
   STRIPE_SECRET_KEY="sk_test_..."
   STRIPE_PUBLISHABLE_KEY="pk_test_..."
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Run migrations
   npm run db:migrate
   
   # (Optional) Open Prisma Studio
   npm run db:studio
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ResearchmarketInsight/
├── app/                          # Next.js App Router
│   ├── [lang]/                   # Language-specific routes
│   │   ├── page.tsx             # Homepage
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── industry/            # Industry page
│   │   └── press-release/       # Press releases
│   ├── admin/                   # Admin dashboard
│   └── api/                     # API routes
├── components/                   # React components
│   ├── layout/                  # Header, Footer
│   ├── home/                    # Homepage sections
│   └── ui/                      # Reusable UI components
├── lib/                         # Utilities and configurations
│   ├── i18n.ts                  # Internationalization
│   ├── db.ts                    # Database connection
│   └── locales/                 # Translation files
├── prisma/                      # Database schema
│   └── schema.prisma           # Prisma schema
└── public/                      # Static assets
```

## 🌍 Multi-language Support

The application supports 8 languages:
- English (`/en`)
- Chinese (`/zh`)
- Korean (`/ko`)
- Arabic (`/ar`)
- French (`/fr`)
- Spanish (`/es`)
- German (`/de`)
- Japanese (`/jp`)

### Adding New Languages

1. Create a new locale file in `lib/locales/`
2. Add the language to the `languages` object in `lib/i18n.ts`
3. Update the translations object

## 🗄️ Database Schema

The application uses PostgreSQL with the following main models:

- **Users**: Admin and regular users
- **Reports**: Market research reports
- **PressReleases**: Company press releases
- **Leads**: Contact form submissions
- **SampleRequests**: Sample report requests
- **Orders**: Purchase orders
- **StaticPages**: CMS content

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:migrate   # Run database migrations
npm run db:generate  # Generate Prisma client
npm run db:studio    # Open Prisma Studio

# Linting
npm run lint         # Run ESLint
```

## 📊 Admin Dashboard

Access the admin dashboard at `/admin` with features:
- User management
- Report management
- Lead tracking
- Analytics overview
- Content management

## 🎨 Customization

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Custom Colors**: Primary and secondary color schemes
- **Animations**: Framer Motion for smooth transitions

### Components
- **Reusable UI**: Button, Input, Card components
- **Layout Components**: Header, Footer, Sidebar
- **Form Components**: Contact, Sample Request forms

## 🔒 Security

- **Input Validation**: Form validation with Zod
- **SQL Injection**: Protected with Prisma ORM
- **XSS Protection**: Sanitized inputs
- **CSRF Protection**: Built-in Next.js protection

## 📈 Performance

- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic with Next.js
- **Caching**: Static generation where possible
- **CDN Ready**: Optimized for CDN deployment

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Other Platforms
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **DigitalOcean**: VPS deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: support@marketresearchinsights.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 