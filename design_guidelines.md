# AnswerPro 24 Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern SaaS platforms like Linear and Notion, combined with service industry leaders like ServiceTitan for credibility and trust.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Brand Blue: 217 91% 60% (main CTA buttons, links, accents)
- Deep Slate: 215 28% 17% (headings, primary text)
- Light Slate: 215 20% 65% (secondary text, borders)

**Supporting Colors:**
- Background: 0 0% 100% (light mode), 222 84% 5% (dark mode)
- Success Green: 142 76% 36% (form success states)
- Warning Orange: 38 92% 50% (alerts, highlights)

### Typography
- **Primary Font**: Inter (Google Fonts) - clean, professional
- **Headings**: Font weights 600-700, sizes from text-2xl to text-5xl
- **Body**: Font weight 400-500, text-base to text-lg
- **Captions**: Font weight 400, text-sm

### Layout System
**Spacing Units**: Consistently use Tailwind units of 4, 6, 8, 12, 16, 24 for spacing (p-4, mb-8, gap-6, etc.)
- Container max-width: 7xl with responsive padding
- Section spacing: py-16 to py-24
- Component spacing: gap-6 to gap-8

### Component Library

**Navigation**: Clean header with logo, navigation links, and prominent CTA button
**Hero Section**: Large, impactful with headline, subtext, dual CTA buttons, and hero illustration
**Feature Cards**: Grid layout with icons, headlines, and descriptions
**Pricing Cards**: Three-tier layout with highlighted popular plan
**Industry Cards**: Image-based cards with overlay text for each service sector
**Forms**: Clean inputs with proper validation states and success/error messaging
**Buttons**: Primary (filled), secondary (outline), with consistent hover states

### Visual Treatment
**Gradients**: Subtle blue-to-purple gradients for hero backgrounds and accent elements
**Shadows**: Soft drop shadows (shadow-lg, shadow-xl) for card elevation
**Borders**: Subtle borders using slate colors, rounded corners (rounded-lg, rounded-xl)
**Icons**: Heroicons library via CDN for consistency

## Images
**Hero Image**: Large illustration or photo showing a home service professional using mobile device, positioned right side of hero section
**Industry Images**: Professional photos for each service category (plumber, electrician, HVAC, garage door) used in industry cards
**Feature Icons**: Simple line icons from Heroicons for each feature highlight
**About Images**: Professional team photos and office environment shots

## Key Design Principles
1. **Trust & Credibility**: Professional color scheme, clean typography, testimonials prominently displayed
2. **Clarity**: Clear value proposition, simple navigation, obvious CTAs
3. **Mobile-First**: Responsive design ensuring excellent mobile experience
4. **Accessibility**: Proper contrast ratios, focus states, semantic HTML structure
5. **Performance**: Optimized images, minimal animations, fast loading

## Special Considerations
- Maintain consistent dark mode support across all components
- Use blurred backgrounds for outline buttons over images
- Keep animations minimal and purposeful
- Ensure strong contrast for readability in both light and dark modes