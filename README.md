# AA Fleet Wash - Premium Fleet & Heavy Equipment Washing

A luxury, professional-grade website for AA Fleet Wash - built for international clients who demand excellence.

## 🌟 Key Features

### Premium Design Elements
- **Centered Logo Navigation**: Distinctive three-column header with mathematically centered logo
- **Cinematic Hero**: Full-viewport immersive backgrounds with professional truck imagery
- **Real Photography**: All placeholder emojis replaced with actual professional truck images
- **Luxury Typography**: Bricolage Grotesque for headings, Geist for body text
- **Premium Interactions**: Smooth hover effects, image zoom, sophisticated animations
- **Glass Morphism**: Modern backdrop blur effects and translucent surfaces

### Professional Pages
1. **Home**: Hero, Services showcase, Why Choose Us, Before/After transformation, CTA
2. **Services**: Detailed service pages with alternating image/text layouts
3. **Equipment**: Visual showcase of all equipment types we service
4. **About**: Company story and values
5. **Gallery**: Professional image gallery with varied layouts
6. **FAQ**: Accordion-style frequently asked questions
7. **Contact**: Professional contact form with SVG icons
8. **Quote**: Comprehensive quote request form

### Technical Excellence
- **React 19** with React Router DOM for smooth navigation
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Premium Fonts**: Google Fonts (Bricolage Grotesque & Geist)
- **Optimized Images**: Professional truck photography throughout
- **Smooth Animations**: 60fps transitions using cubic-bezier easing
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🚀 Quick Start

### Install Dependencies
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📸 Available Images

The website uses these professional images from `/src/assets/`:

**Trucks & Vehicles:**
- `RedTruck.png`, `RedTruck1.png`, `RedTruck2.png`
- `TruckWhite1.png`, `TruckWhite2.png`, `truckwhite3.png`
- `MinoTruck1.png`, `MinoTruck2.png`
- `Truck1.png`, `Truck2.png`
- `CornorTruck.png`, `RightCornorTruck.png`
- `WashablwTruck.png`, `TruckTire.png`

**Before/After:**
- `truck-wheelBefore.jpg`
- `truck-wheelAfter.jpg`

**Branding:**
- `AA-FleetWash.png` (Logo)
- `AA-FleetWashbg.png` (Hero background)

## 🎨 Design Philosophy

This website is built to communicate:

1. **Professionalism**: Every detail shows expertise and attention to quality
2. **Luxury**: Premium visual treatment worthy of high-value commercial clients
3. **Trust**: Solid, dependable brand that international clients can rely on
4. **Capability**: Showcases ability to handle any size job, any equipment type
5. **Excellence**: From typography to photography, everything is first-class

### Color Palette
- **Background**: `#0a0a0c` (Deep black)
- **Surface**: `#141418` (Charcoal)
- **Text Primary**: `white` / `#f3f4f6`
- **Text Secondary**: `#d1d5db`
- **Text Muted**: `#9ca3af` / `#6b7280`
- **Borders**: `rgba(255, 255, 255, 0.08-0.2)`

### Typography Scale
- **Hero Heading**: 72px (56px mobile)
- **Page Headings**: 56px (40px mobile)
- **Section Titles**: 48px (32px mobile)
- **Subsection Titles**: 36px (28px mobile)
- **Card Titles**: 22-26px
- **Body Text**: 15-18px
- **Small Text**: 13-14px

## 📱 Responsive Breakpoints
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Header Behavior

### Desktop
- Transparent over hero with white text
- Scrolls into dark glass navbar with backdrop blur
- Logo remains perfectly centered at all times
- Smooth 0.4s transitions

### Mobile
- Hamburger menu (left)
- Centered logo (middle)
- Quote icon (right)
- Full-screen overlay navigation when opened

## 🔧 Customization

### Update Logo
Replace `src/assets/AA-FleetWash.png` (Recommended: 200x60px @ 2x)

### Update Hero Background
Replace `src/assets/AA-FleetWashbg.png` (Recommended: 1920x1080px minimum)

### Update Contact Info
Edit `src/pages/Contact.jsx`:
- Phone, email, location, hours

### Modify Services
Edit services array in `src/pages/Services.jsx` and `src/pages/Home.jsx`

### Change Colors
Update color values in CSS files (use Find & Replace for consistency)

## 🌐 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires modern CSS features:
- CSS Grid
- Flexbox
- Backdrop Filter
- CSS Custom Properties
- CSS Transforms

## 📄 File Structure
```
src/
├── components/
│   ├── Header.jsx & .css    (Centered-logo navigation)
│   └── Footer.jsx & .css    (Premium footer)
├── pages/
│   ├── Home.jsx & .css      (Landing page)
│   ├── Services.jsx & .css  (Service details)
│   ├── Equipment.jsx        (Equipment showcase)
│   ├── About.jsx            (Company story)
│   ├── Gallery.jsx          (Image gallery)
│   ├── FAQ.jsx              (Questions & answers)
│   ├── Contact.jsx          (Contact form)
│   ├── Quote.jsx            (Quote request)
│   └── SharedPages.css      (Shared styles)
├── assets/                  (Images & media)
├── App.jsx                  (Router config)
├── App.css                  (App wrapper)
├── index.css                (Global styles)
└── main.jsx                 (Entry point)
```

## ✨ Premium Features

- **Image Hover Zoom**: All images scale elegantly on hover
- **Card Elevation**: Cards lift with shadow on hover
- **Smooth Scrolling**: Native smooth scroll behavior
- **Before/After Showcase**: Visual proof of quality work
- **Professional Icons**: SVG icons instead of emojis
- **Glass Effects**: Sophisticated backdrop blur
- **Editorial Layouts**: Varied, magazine-style image grids
- **Premium Typography**: Professional font pairing
- **Micro-interactions**: Polished hover states throughout

## 🚀 Deployment

Ready for deployment to:
- Vercel
- Netlify
- AWS Amplify
- GitHub Pages
- Any static hosting

Just run `npm run build` and upload the `dist` folder.

## 📞 Support

For questions about customization or deployment, refer to:
- `DESIGN_NOTES.md` for detailed design documentation
- Vite documentation: https://vitejs.dev
- React documentation: https://react.dev

---

**Built with precision for international clients who demand excellence.**

© 2024 AA Fleet Wash. Professional Fleet & Heavy Equipment Washing.
