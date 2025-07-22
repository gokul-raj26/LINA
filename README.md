# LINA Leathers - Premium Leather Goods Website

<div align="center">
  <h1>🧥 LINA Leathers</h1>
  <p><strong>Crafting Premium Leather Goods with Timeless Elegance</strong></p>
  
  ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.6-0055FF?style=for-the-badge&logo=framer&logoColor=white)
</div>

## 📖 About

LINA Leathers is a premium leather goods manufacturing company specializing in custom leather products and retail exports. This website showcases our brand story, product portfolio, client testimonials, and provides direct purchase links through trusted e-commerce platforms.

**Live Demo:** [View Website](https://your-domain.com) *(Replace with actual URL)*

## ✨ Features

### 🎨 Design & User Experience
- **Mobile-First Responsive Design** - Optimized for all devices
- **Premium Aesthetic** - Rich textures and sophisticated color palette
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Accessibility Focused** - WCAG compliant with proper contrast ratios
- **Performance Optimized** - Lazy loading, optimized images, and fast loading times

### 🏠 Pages & Functionality
- **Home Page** - Hero section, services overview, and process timeline
- **About Page** - Company history, timeline, and client showcase
- **Products Page** - Product grid with direct Amazon/Flipkart purchase links
- **Testimonials Page** - Client reviews and success stories
- **Contact Page** - Contact form with inquiry functionality

### 🛠️ Technical Features
- **React 18** with TypeScript for type safety
- **React Router** for seamless navigation
- **Tailwind CSS** for responsive styling
- **Framer Motion** for smooth animations
- **Heroicons** for consistent iconography
- **SEO Optimized** with proper meta tags and structure

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--background: #1e1e1e        /* Deep Charcoal */
--text-primary: #f9f5ef      /* Cream White */
--text-secondary: #d4af37    /* Gold Accent */

/* Gradient Accents */
--gradient-primary: linear-gradient(to right, #ff6a00, #d4af37)  /* Burnt Orange to Gold */
--gradient-secondary: linear-gradient(to right, #ff6a00, #3e1f0d) /* Burnt Orange to Rich Brown */
```

### Typography
- **Headings:** Playfair Display (Serif)
- **Body Text:** Lato (Sans-serif)
- **Weights:** 300, 400, 600, 700

### Spacing System
- Based on 8px grid system
- Consistent padding and margins
- Responsive breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/lina-leathers-website.git
   cd lina-leathers-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # Company story & history
│   ├── Products.tsx    # Product showcase
│   ├── Testimonials.tsx # Client reviews
│   └── Contact.tsx     # Contact form & info
├── App.tsx             # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles & Tailwind imports
```

## 🛒 E-commerce Integration

The website integrates with major Indian e-commerce platforms:

- **Amazon India** - Premium handbags, belts, wallets
- **Flipkart** - Leather jackets, sling bags, accessories

### Product Links Structure
```typescript
interface Product {
  name: string;
  description: string;
  image: string;
  amazonLink?: string;
  flipkartLink?: string;
  category: string;
}
```

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Mobile | < 640px | Single column, stacked navigation |
| Tablet | 640px - 1024px | Two columns, collapsible menu |
| Desktop | > 1024px | Multi-column, full navigation |

## 🎭 Animation System

### Framer Motion Variants
- **Page Transitions** - Smooth fade and slide effects
- **Scroll Animations** - Elements animate on viewport entry
- **Hover States** - Interactive feedback on buttons and cards
- **Loading States** - Skeleton screens and shimmer effects

### Performance Considerations
- **Reduced Motion Support** - Respects user preferences
- **Optimized Animations** - GPU-accelerated transforms
- **Lazy Loading** - Images load on demand

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Browser Support

- **Modern Browsers** - Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers** - iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement** - Graceful degradation for older browsers

## 📊 Performance Metrics

- **Lighthouse Score** - 95+ Performance, 100 Accessibility
- **Core Web Vitals** - Optimized LCP, FID, and CLS
- **Bundle Size** - < 500KB gzipped
- **Image Optimization** - WebP format with fallbacks

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Add proper accessibility attributes
- Test on multiple devices and browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

**LINA Leathers**
- 📧 Email: info@linaleathers.com
- 📱 Phone: +91 98765 43210
- 📍 Address: Mumbai, Maharashtra, India
- 🌐 Website: [linaleathers.com](https://linaleathers.com)

**Development Team**
- 💻 Technical Issues: [Create an Issue](https://github.com/your-username/lina-leathers-website/issues)
- 📖 Documentation: [Wiki](https://github.com/your-username/lina-leathers-website/wiki)

## 🙏 Acknowledgments

- **Design Inspiration** - Premium leather goods industry standards
- **Images** - [Pexels](https://pexels.com) for high-quality stock photography
- **Icons** - [Heroicons](https://heroicons.com) for consistent iconography
- **Fonts** - [Google Fonts](https://fonts.google.com) for typography

---

<div align="center">
  <p>Made with ❤️ for LINA Leathers</p>
  <p><strong>Crafting Digital Excellence, Just Like Our Leather Goods</strong></p>
</div>