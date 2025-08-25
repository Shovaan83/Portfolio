# Shovan's Portfolio

A modern, responsive personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, featuring a beautiful bento grid design and smooth animations.

## ✨ Features

- **Modern Design**: Clean, minimalist design with a bento grid layout
- **Responsive**: Fully responsive across all devices
- **Performance**: Optimized for speed with Next.js Image optimization and static generation
- **SEO Friendly**: Proper meta tags, Open Graph, and sitemap
- **Animations**: Smooth animations with Framer Motion
- **Accessibility**: WCAG AA compliant
- **Dark Mode**: Automatic dark mode support

## 🚀 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal bio and skills showcase
- **Projects**: Featured projects in bento grid layout
- **Experience**: Professional experience and education timeline
- **Contact**: Contact form and social media links
- **Footer**: Additional information and quick links

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/shovan/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### 1. Personal Information
Update the following files with your information:
- `src/app/layout.tsx` - Meta tags and SEO information
- `src/components/sections/Hero.tsx` - Name, title, and bio
- `src/components/sections/About.tsx` - About content and skills
- `src/components/sections/Projects.tsx` - Your projects
- `src/components/sections/Experience.tsx` - Work experience and education
- `src/components/sections/Contact.tsx` - Contact information

### 2. Images
Add your images to the `public` folder:
- Profile photo
- Project screenshots
- Any other assets

### 3. Domain Configuration
Update the domain in:
- `src/app/sitemap.ts`
- `public/robots.txt`
- `src/app/layout.tsx` (Open Graph URL)

### 4. Contact Form
The contact form is ready to integrate with:
- Formspree
- Netlify Forms
- Custom API endpoint

## 🎨 Customization

### Colors
The color palette can be customized in `src/app/globals.css`:
- Primary Blue: `#3B82F6` / `#60A5FA`
- Primary Green: `#10B981` / `#34D399`
- Background: `#F9FAFB`
- Card Background: `#FFFFFF`

### Fonts
Update fonts in `src/app/layout.tsx` by importing different Google Fonts.

### Layout
Modify the bento grid layout in `src/components/sections/Projects.tsx` to fit your content.

## 📈 Performance

- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- Netlify
- AWS Amplify
- GitHub Pages (with static export)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: hello@shovan.dev
- **LinkedIn**: [linkedin.com/in/shovan](https://linkedin.com/in/shovan)
- **GitHub**: [github.com/shovan](https://github.com/shovan)

---

Built with ❤️ using Next.js and Tailwind CSS
