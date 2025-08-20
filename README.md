# Research Market Insight

A comprehensive market research and business intelligence platform built with Next.js.

## 🚀 Features

- **Industry Analysis**: Deep insights across 10+ major industry sectors
- **Market Research**: Comprehensive reports and data analysis
- **Strategic Consulting**: Expert guidance for business growth
- **Global Coverage**: Market intelligence across international markets
- **Responsive Design**: Mobile-first, modern UI/UX

## 🏗️ Project Structure

```
├── app/                    # Next.js 13+ app directory
│   ├── [lang]/           # Internationalization routes
│   │   ├── industry/     # Industry category pages
│   │   ├── services/     # Service pages
│   │   ├── insights/     # Blog and press release pages
│   │   ├── about/        # Company information pages
│   │   └── contact/      # Contact and inquiry pages
│   ├── api/              # API routes
│   └── layout.tsx        # Root layout
├── components/            # Reusable UI components
│   ├── layout/           # Header, Footer, Navigation
│   ├── home/             # Homepage components
│   └── ui/               # Common UI elements
├── public/                # Static assets
│   └── assets/           # Images, logos, and media
│       ├── logo.svg      # Company logo
│       ├── hero-placeholder.svg  # Hero image placeholder
│       └── regional-insights.svg # Chart placeholders
├── lib/                   # Utility functions and configurations
├── types/                 # TypeScript type definitions
└── prisma/                # Database schema and migrations
```

## 🎨 Asset Structure

All images and logos are now stored in the `/public/assets/` directory using SVG format for:

- **Scalability**: Vector graphics that look crisp at any size
- **Performance**: Smaller file sizes and faster loading
- **Compatibility**: Works on any domain and platform
- **Maintenance**: Easy to update and modify

### Asset Files:
- `logo.svg` - Company logo with "RMI" branding
- `hero-placeholder.svg` - Placeholder for hero section images
- `regional-insights.svg` - Placeholder for chart and data visualizations
- `favicon.svg` - Browser favicon

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

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
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Building for Production

### Development Build
```bash
npm run build
npm start
```

### Production Deployment
The project is optimized for deployment on any platform including:
- Vercel
- Netlify
- AWS Amplify
- Self-hosted servers

## 🌐 Internationalization

The application supports multiple languages through dynamic routing:
- `/en/` - English (default)
- `/es/` - Spanish
- `/fr/` - French
- `/de/` - German
- And more...

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Progressive Web App (PWA) ready

## 🎯 Key Technologies

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Icons**: Lucide React
- **Database**: Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Platform agnostic

## 📊 Industry Coverage

1. **Life Sciences & Healthcare**
2. **Technology & IT**
3. **Automotive & Transportation**
4. **Energy & Utilities**
5. **Financial Services**
6. **Manufacturing**
7. **Retail & E-commerce**
8. **Construction & Real Estate**
9. **Aerospace & Defense**
10. **Chemicals & Materials**

## 🔧 Configuration

### Environment Variables
```env
# Database
DATABASE_URL="your-database-url"

# Authentication
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"

# External APIs
GOOGLE_ANALYTICS_ID="your-ga-id"
```

### Next.js Configuration
- Image optimization disabled for better compatibility
- Custom headers for SEO
- Rewrite rules for sitemap and robots.txt

## 📈 Performance Features

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: SVG assets for scalability
- **Code Splitting**: Automatic bundle optimization
- **Lazy Loading**: Components loaded on demand
- **Caching**: Optimized caching strategies

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Next.js
3. Deploy with zero configuration

### Other Platforms
1. Build the project: `npm run build`
2. Export static files: `npm run export` (if needed)
3. Deploy to your preferred platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: sales@researchmarketinsights.com
- Phone: +91-20-12345678
- Office: Office No. 208, Vision Mall, Pune, Maharashtra, 411057

---

**Built with ❤️ by the Research Market Insight Team** 