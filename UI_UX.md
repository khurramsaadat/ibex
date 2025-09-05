# UI/UX Design Guidelines
## IBEX Design - Creative Agency Website

**Document Version:** 1.0  
**Created Date:** 2025-01-05  
**Last Updated:** 2025-01-05  
**Design System**: ShadCN UI with Teal Theme  
**Framework**: Next.js 15 + Tailwind CSS v4  

---

## 1. Design Philosophy

### 1.1 Core Principles
- **Minimalist Elegance**: Clean, uncluttered design that lets content shine
- **Professional Sophistication**: Premium feel that reflects our design expertise
- **User-Centric**: Intuitive navigation and clear information hierarchy
- **Brand Consistency**: Cohesive visual identity across all touchpoints
- **Accessibility First**: WCAG 2.1 AA compliance for inclusive design

### 1.2 Design Goals
- Create a visually stunning showcase of our design capabilities
- Establish trust and credibility with potential clients
- Provide seamless user experience across all devices
- Communicate our services and expertise effectively
- Drive conversions and lead generation

---

## 2. Color System

### 2.1 Primary Color Palette
```css
/* Teal Theme - Primary Colors */
--primary: oklch(0.5 0.15 180);           /* Teal 500 */
--primary-foreground: oklch(0.98 0.01 180); /* Teal 50 */

/* Teal Variations */
--teal-50: oklch(0.98 0.01 180);          /* Lightest teal */
--teal-100: oklch(0.95 0.03 180);         /* Very light teal */
--teal-200: oklch(0.90 0.06 180);         /* Light teal */
--teal-300: oklch(0.80 0.10 180);         /* Medium light teal */
--teal-400: oklch(0.65 0.12 180);         /* Medium teal */
--teal-500: oklch(0.5 0.15 180);          /* Primary teal */
--teal-600: oklch(0.4 0.18 180);          /* Dark teal */
--teal-700: oklch(0.3 0.20 180);          /* Darker teal */
--teal-800: oklch(0.2 0.15 180);          /* Very dark teal */
--teal-900: oklch(0.1 0.10 180);          /* Darkest teal */
```

### 2.2 Secondary Colors
```css
/* Neutral Grays */
--gray-50: oklch(0.98 0.01 0);            /* Lightest gray */
--gray-100: oklch(0.95 0.01 0);           /* Very light gray */
--gray-200: oklch(0.90 0.01 0);           /* Light gray */
--gray-300: oklch(0.80 0.01 0);           /* Medium light gray */
--gray-400: oklch(0.65 0.01 0);           /* Medium gray */
--gray-500: oklch(0.5 0.01 0);            /* Base gray */
--gray-600: oklch(0.4 0.01 0);            /* Dark gray */
--gray-700: oklch(0.3 0.01 0);            /* Darker gray */
--gray-800: oklch(0.2 0.01 0);            /* Very dark gray */
--gray-900: oklch(0.1 0.01 0);            /* Darkest gray */

/* Accent Colors */
--accent: oklch(0.6 0.2 180);             /* Lighter teal accent */
--accent-foreground: oklch(0.1 0.05 180); /* Dark teal text */
--muted: oklch(0.95 0.01 0);              /* Muted background */
--muted-foreground: oklch(0.4 0.01 0);    /* Muted text */
```

### 2.3 Semantic Colors
```css
/* Status Colors */
--success: oklch(0.6 0.15 140);           /* Green */
--warning: oklch(0.7 0.15 60);            /* Yellow */
--error: oklch(0.6 0.2 20);               /* Red */
--info: oklch(0.6 0.15 240);              /* Blue */

/* Background Colors */
--background: oklch(1 0 0);               /* White */
--foreground: oklch(0.1 0.01 0);          /* Dark text */
--card: oklch(1 0 0);                     /* Card background */
--card-foreground: oklch(0.1 0.01 0);     /* Card text */
--border: oklch(0.9 0.01 0);              /* Border color */
--input: oklch(0.9 0.01 0);               /* Input border */
--ring: oklch(0.5 0.15 180);              /* Focus ring */
```

---

## 3. Typography

### 3.1 Font Stack
```css
/* Primary Font - Geist Sans */
--font-sans: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

/* Monospace Font - Geist Mono */
--font-mono: 'Geist Mono', 'SF Mono', 'Monaco', 'Inconsolata', 
             'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', monospace;
```

### 3.2 Type Scale
```css
/* Headings */
--text-6xl: 3.75rem;    /* 60px - Hero headlines */
--text-5xl: 3rem;       /* 48px - Page titles */
--text-4xl: 2.25rem;    /* 36px - Section titles */
--text-3xl: 1.875rem;   /* 30px - Subsection titles */
--text-2xl: 1.5rem;     /* 24px - Card titles */
--text-xl: 1.25rem;     /* 20px - Large text */
--text-lg: 1.125rem;    /* 18px - Body large */
--text-base: 1rem;      /* 16px - Body text */
--text-sm: 0.875rem;    /* 14px - Small text */
--text-xs: 0.75rem;     /* 12px - Caption text */
```

### 3.3 Font Weights
```css
--font-thin: 100;
--font-extralight: 200;
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
--font-black: 900;
```

### 3.4 Line Heights
```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

---

## 4. Spacing System

### 4.1 Spacing Scale
```css
--space-0: 0;
--space-1: 0.25rem;     /* 4px */
--space-2: 0.5rem;      /* 8px */
--space-3: 0.75rem;     /* 12px */
--space-4: 1rem;        /* 16px */
--space-5: 1.25rem;     /* 20px */
--space-6: 1.5rem;      /* 24px */
--space-8: 2rem;        /* 32px */
--space-10: 2.5rem;     /* 40px */
--space-12: 3rem;       /* 48px */
--space-16: 4rem;       /* 64px */
--space-20: 5rem;       /* 80px */
--space-24: 6rem;       /* 96px */
--space-32: 8rem;       /* 128px */
--space-40: 10rem;      /* 160px */
--space-48: 12rem;      /* 192px */
--space-56: 14rem;      /* 224px */
--space-64: 16rem;      /* 256px */
```

### 4.2 Component Spacing
- **Section Padding**: 80px top/bottom, 24px left/right
- **Card Padding**: 24px all around
- **Button Padding**: 12px vertical, 24px horizontal
- **Input Padding**: 12px vertical, 16px horizontal
- **Grid Gaps**: 24px for desktop, 16px for mobile

---

## 5. Layout System

### 5.1 Container Sizes
```css
--container-sm: 640px;      /* Small screens */
--container-md: 768px;      /* Medium screens */
--container-lg: 1024px;     /* Large screens */
--container-xl: 1280px;     /* Extra large screens */
--container-2xl: 1536px;    /* 2X large screens */
```

### 5.2 Breakpoints
```css
--breakpoint-sm: 640px;     /* Small devices */
--breakpoint-md: 768px;     /* Medium devices */
--breakpoint-lg: 1024px;    /* Large devices */
--breakpoint-xl: 1280px;    /* Extra large devices */
--breakpoint-2xl: 1536px;   /* 2X large devices */
```

### 5.3 Grid System
- **12-column grid** for desktop layouts
- **6-column grid** for tablet layouts
- **4-column grid** for mobile layouts
- **Flexbox** for component-level layouts
- **CSS Grid** for complex layouts

---

## 6. Component Guidelines

### 6.1 Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--primary);
  color: var(--primary-foreground);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: var(--teal-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--primary);
  color: var(--primary-foreground);
}
```

### 6.2 Cards

#### Portfolio Card
```css
.portfolio-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--primary);
}
```

#### Service Card
```css
.service-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}
```

### 6.3 Forms

#### Input Fields
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--border);
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: var(--background);
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
}
```

#### Labels
```css
.form-label {
  display: block;
  font-weight: 600;
  font-size: 14px;
  color: var(--foreground);
  margin-bottom: 8px;
}
```

---

## 7. Navigation Guidelines

### 7.1 Header Navigation
- **Height**: 80px on desktop, 60px on mobile
- **Background**: Transparent with backdrop blur
- **Logo**: Left-aligned, 40px height
- **Menu Items**: Right-aligned, 16px font size
- **Spacing**: 32px between menu items
- **Hover Effects**: Color change to primary teal

### 7.2 Mobile Navigation
- **Hamburger Menu**: 24px icon size
- **Overlay**: Full-screen with backdrop blur
- **Menu Items**: 24px font size, 48px height
- **Animation**: Slide-in from right
- **Close Button**: Top-right corner

### 7.3 Footer Navigation
- **Height**: 400px minimum
- **Background**: Dark teal gradient
- **Columns**: 4 columns on desktop, 2 on tablet, 1 on mobile
- **Links**: Organized by category
- **Social Icons**: 24px size with hover effects

---

## 8. Animation Guidelines

### 8.1 Transitions
```css
/* Standard Transitions */
--transition-fast: 0.15s ease;
--transition-normal: 0.3s ease;
--transition-slow: 0.5s ease;

/* Easing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
```

### 8.2 Hover Effects
- **Buttons**: Translate up 2px, add shadow
- **Cards**: Translate up 4px, add shadow, border color change
- **Links**: Color change to primary teal
- **Images**: Scale up 1.05x with overlay

### 8.3 Loading States
- **Skeleton Loading**: Shimmer effect for content
- **Spinner**: Teal color with 1s rotation
- **Progress Bar**: Animated width fill
- **Fade In**: 0.3s ease-out for content

---

## 9. Accessibility Guidelines

### 9.1 Color Contrast
- **Normal Text**: 4.5:1 contrast ratio minimum
- **Large Text**: 3:1 contrast ratio minimum
- **Interactive Elements**: 3:1 contrast ratio minimum
- **Focus Indicators**: 3:1 contrast ratio minimum

### 9.2 Keyboard Navigation
- **Tab Order**: Logical flow through interactive elements
- **Focus Indicators**: Visible outline on focus
- **Skip Links**: Skip to main content
- **ARIA Labels**: Descriptive labels for screen readers

### 9.3 Screen Reader Support
- **Alt Text**: Descriptive alt text for all images
- **Heading Structure**: Proper h1-h6 hierarchy
- **Form Labels**: Associated labels for all form inputs
- **ARIA Attributes**: Proper ARIA roles and states

---

## 10. Responsive Design

### 10.1 Mobile First Approach
- **Base Styles**: Mobile-first CSS
- **Progressive Enhancement**: Add features for larger screens
- **Touch Targets**: Minimum 44px touch target size
- **Readable Text**: Minimum 16px font size

### 10.2 Breakpoint Strategy
```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### 10.3 Device-Specific Considerations
- **iPhone**: Safe area insets for notch devices
- **Android**: Material Design touch targets
- **Tablet**: Landscape and portrait orientations
- **Desktop**: Hover states and keyboard navigation

---

## 11. Performance Guidelines

### 11.1 Image Optimization
- **Format**: WebP with JPEG fallback
- **Sizing**: Responsive images with srcset
- **Lazy Loading**: Below-the-fold images
- **Compression**: 80% quality for photos, 90% for graphics

### 11.2 Animation Performance
- **Transform Properties**: Use transform and opacity
- **Avoid**: Layout-triggering properties
- **GPU Acceleration**: Use will-change property
- **Reduced Motion**: Respect prefers-reduced-motion

### 11.3 Loading Performance
- **Critical CSS**: Inline critical styles
- **Font Loading**: Preload web fonts
- **Code Splitting**: Dynamic imports for non-critical code
- **Bundle Size**: Keep JavaScript bundles under 250KB

---

## 12. Content Guidelines

### 12.1 Writing Style
- **Tone**: Professional yet approachable
- **Voice**: Confident and knowledgeable
- **Length**: Concise and scannable
- **CTAs**: Action-oriented and clear

### 12.2 Visual Hierarchy
- **Headlines**: Clear hierarchy with proper heading tags
- **Body Text**: 16px minimum, 1.6 line height
- **Lists**: Bulleted for features, numbered for steps
- **Emphasis**: Bold for important terms, italic for quotes

### 12.3 Image Guidelines
- **Quality**: High-resolution, professional photography
- **Consistency**: Similar style and lighting
- **Alt Text**: Descriptive and meaningful
- **Optimization**: Compressed for web delivery

---

## 13. Brand Guidelines

### 13.1 Logo Usage
- **Minimum Size**: 120px width
- **Clear Space**: 1x logo height on all sides
- **Backgrounds**: White or light backgrounds preferred
- **Colors**: Primary teal or black/white

### 13.2 Brand Voice
- **Professional**: Industry expertise and credibility
- **Creative**: Innovative and forward-thinking
- **Approachable**: Friendly and collaborative
- **Confident**: Results-driven and reliable

### 13.3 Visual Identity
- **Clean**: Minimalist and uncluttered
- **Modern**: Contemporary design trends
- **Sophisticated**: Premium quality feel
- **Consistent**: Cohesive across all touchpoints

---

## 14. Quality Assurance

### 14.1 Design Review Checklist
- [ ] Color contrast meets accessibility standards
- [ ] Typography hierarchy is clear and consistent
- [ ] Spacing follows the design system
- [ ] Components match the style guide
- [ ] Responsive design works on all breakpoints
- [ ] Animations are smooth and purposeful
- [ ] Loading states are implemented
- [ ] Error states are handled gracefully

### 14.2 Testing Requirements
- [ ] Cross-browser compatibility testing
- [ ] Mobile device testing (iOS/Android)
- [ ] Accessibility testing with screen readers
- [ ] Performance testing with Lighthouse
- [ ] User testing with target audience
- [ ] Content review and proofreading

---

**Document Status**: Active  
**Next Review Date**: 2025-01-12  
**Design Lead**: IBEX Design Team
