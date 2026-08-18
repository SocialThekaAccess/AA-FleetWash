# AA Fleet Wash - Design Implementation

## Overview
Premium commercial fleet and heavy equipment washing website featuring a centered-logo navigation system and cinematic design aesthetic.

## Key Design Features

### 1. Centered Logo Header ⭐
The header is the centerpiece of the design:
- **Desktop Layout**: Three-column grid with logo mathematically centered
  - Left nav: Services, Equipment, About, Gallery
  - Center: AA Fleet Wash logo
  - Right nav: FAQ, Contact, GET A QUOTE button
- **Transparent on Hero**: Clean white text over hero image with subtle backdrop blur
- **Scrolled State**: Transforms to dark charcoal glass navbar with smooth transitions
- **Mobile**: Hamburger menu (left), centered logo (middle), quote icon (right)

### 2. Cinematic Hero Section
- Full-viewport height with immersive background image
- Dark overlay for readability (blue-black gradient)
- Large typography hierarchy
- Premium badge component
- Dual CTAs (primary + secondary)
- Supporting tagline: "COMMERCIAL • FLEET • HEAVY EQUIPMENT"

### 3. Premium Visual Language
- **Colors**: Dark charcoal (#0a0a0c), deep blacks, white, metallic grays
- **Typography**: Bold headings, generous whitespace, clean sans-serif
- **Photography**: Large cinematic images with dark overlays
- **UI Elements**: Subtle glass effects, thin borders, minimal rounded corners
- **Transitions**: Smooth 0.3-0.4s cubic-bezier animations

### 4. Service Pages
- Alternating image/text layouts for editorial feel
- Large service cards with hover interactions
- Feature lists with checkmark icons
- Individual CTAs per service

### 5. Component Architecture
- **Header**: Fixed position, scrolled state detection, mobile menu overlay
- **Footer**: Large spacious footer with logo, links, social icons
- **Pages**: Hero → Content → CTA structure
- **Forms**: Premium styling with proper spacing and validation states

## Technology Stack
- React 19.2.8
- React Router DOM 7.x
- Vite 8.2.0
- CSS Modules (component-scoped)

## File Structure
```
src/
├── components/
│   ├── Header.jsx          # Centered-logo navigation
│   ├── Header.css
│   ├── Footer.jsx
│   └── Footer.css
├── pages/
│   ├── Home.jsx            # Landing page with hero
│   ├── Home.css
│   ├── Services.jsx        # Service catalog
│   ├── Services.css
│   ├── Equipment.jsx       # Equipment showcase
│   ├── About.jsx           # Company story
│   ├── Gallery.jsx         # Image gallery
│   ├── FAQ.jsx             # Accordion FAQ
│   ├── Contact.jsx         # Contact form
│   ├── Quote.jsx           # Quote request form
│   └── SharedPages.css     # Shared page styles
├── assets/
│   ├── AA-FleetWash.png    # Main logo
│   ├── AA-FleetWashbg.png  # Hero background
│   └── hero.png
├── App.jsx                 # Router setup
├── App.css
├── index.css               # Global styles
└── main.jsx
```

## Responsive Breakpoints
- **Desktop**: > 1024px (full centered navigation)
- **Tablet**: 768px - 1024px (condensed navigation)
- **Mobile**: < 768px (hamburger menu, centered logo)
- **Small Mobile**: < 480px (further optimizations)

## Build & Development

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

## Customization Guide

### Update Logo
Replace `src/assets/AA-FleetWash.png` with your logo. Recommended size: 200x60px @ 2x

### Update Hero Image
Replace `src/assets/AA-FleetWashbg.png` with high-res hero image. Recommended: 1920x1080px minimum

### Update Contact Information
Edit `src/pages/Contact.jsx`:
- Phone number
- Email address
- Physical location
- Business hours

### Update Services
Edit `src/pages/Services.jsx` services array to add/remove/modify services

### Update Colors
Main colors are defined in CSS files:
- Background: `#0a0a0c` (near black)
- Surface: `#141418` (charcoal)
- Text: `white` / `#d1d5db` (light gray)
- Muted: `#9ca3af` / `#6b7280`

### Add Social Links
Edit `src/components/Footer.jsx` to update social media URLs

## Performance Optimizations
- Minimal JavaScript bundle size
- CSS scoped per component
- Lazy loading ready (add React.lazy for pages)
- Optimized images (use WebP format)
- Smooth scroll behavior

## Accessibility Features
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Proper heading hierarchy
- Alt text on images (add to actual images)

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox required
- Backdrop filter support (graceful degradation)

## Future Enhancements
- [ ] Add actual photography (replace emoji placeholders)
- [ ] Integrate backend API for quote forms
- [ ] Add before/after image slider
- [ ] Implement testimonials section
- [ ] Add service area map
- [ ] Email capture for newsletter
- [ ] Blog/news section
- [ ] Online booking system
- [ ] Live chat integration
- [ ] Performance analytics

## Design Philosophy
This website positions AA Fleet Wash as a premium, professional service trusted by commercial operators. The design emphasizes:
- **Credibility**: Clean, professional aesthetics
- **Capability**: Showcasing range of services and equipment
- **Accessibility**: Easy navigation and clear CTAs
- **Professionalism**: Premium visual treatment throughout
- **Trustworthiness**: Solid, dependable brand presentation

The centered-logo header creates a distinctive brand moment that sets this apart from typical commercial service websites.
