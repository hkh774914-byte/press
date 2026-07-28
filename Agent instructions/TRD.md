# Technical Specification Document

# Gifts of Printing Website

**Version:** 1.0
**Project Type:** Business Website
**Frontend Framework:** React 19 + Vite
**Design Source:** Google Stitch (MCP)
**Development Platform:** Google Antigravity
**Architecture:** Component-Based SPA (Single Page Application)

---

# 1. Purpose

This document defines the complete technical architecture, coding standards, project structure, UI implementation rules, reusable components, performance goals, accessibility requirements, and deployment strategy for the Gifts of Printing website.

The objective is to create a scalable, maintainable, production-ready React application with excellent performance and modern development practices.

---

# 2. Technology Stack

## Core Framework

* React 19
* Vite
* TypeScript (Preferred)
* React Router DOM

---

## Styling

* Tailwind CSS
* CSS Variables
* CSS Modules (optional for isolated components)
* Responsive Grid Layout
* Flexbox

---

## Animation

* Framer Motion
* CSS Transitions
* Intersection Observer API
* Smooth Scroll Behavior

---

## Icons

* Lucide React

---

## Forms

* React Hook Form
* Zod Validation

---

## Notifications

* Sonner Toast

---

## Image Optimization

* Native lazy loading
* Responsive images
* WebP support
* AVIF support

---

## Development Tools

* ESLint
* Prettier
* Husky
* Git
* npm

---

# 3. Folder Structure

```
src/

assets/
    images/
    icons/
    logos/
    fonts/

components/
    common/
    layout/
    home/
    about/
    products/
    services/
    portfolio/
    contact/
    ui/

pages/
    Home/
    About/
    Products/
    Services/
    Portfolio/
    FAQ/
    Contact/
    NotFound/

layouts/

hooks/

context/

data/

utils/

constants/

styles/

router/

types/

services/

App.tsx
main.tsx
```

---

# 4. Routing

Use React Router.

Routes

```
/

about

products

services

portfolio

faq

contact

*
```

404 page should redirect users gracefully.

---

# 5. Layout Architecture

App

↓

Router

↓

Main Layout

↓

Navbar

↓

Page

↓

Footer

Global layout should never re-render unnecessarily.

---

# 6. Component Architecture

Every UI element should be reusable.

Example

```
Button

Card

Section

Container

Heading

Input

Textarea

Badge

ProductCard

ServiceCard

GalleryCard

ReviewCard

Accordion

FAQItem

HeroSection

CTASection

```

Each component should have:

* Props Interface
* Variants
* Accessibility
* Mobile responsiveness
* Animation support

---

# 7. State Management

Use React Context only for:

Theme

Navigation

Global UI

Future shopping cart

No Redux required.

---

# 8. Data Management

Current Version

Static JSON

Example

```
products.json

services.json

testimonials.json

faq.json
```

Future

REST API

Firebase

Supabase

Headless CMS

---

# 9. Page Specifications

## Home

Components

Hero

Services Preview

Categories

Featured Products

Customization Process

Portfolio Preview

Testimonials

FAQs

CTA

Footer

---

## About

Hero Banner

Story

Mission

Vision

Values

Timeline

Team

Statistics

---

## Products

Category Filter

Product Cards

Search

Pagination (future)

Product Detail Modal

---

## Services

Service Cards

Process

Pricing CTA

Business Printing

Bulk Orders

---

## Portfolio

Gallery Grid

Category Filter

Lightbox

Lazy Loading

Image Optimization

---

## FAQ

Accordion

Search

Categories

---

## Contact

Information

Google Maps

Contact Form

Business Hours

WhatsApp Button

---

# 10. Responsive Breakpoints

```
xs

<640

sm

640

md

768

lg

1024

xl

1280

2xl

1536
```

Every component must scale correctly.

---

# 11. Design Tokens

Primary

Royal Blue

Secondary

Purple

Accent

Orange

Neutral

White

Gray

Black

Spacing

```
4
8
12
16
24
32
48
64
96
```

Border Radius

```
8

12

16

24

9999
```

Shadow Levels

Small

Medium

Large

Floating

---

# 12. Typography Scale

Hero

56px

H1

48px

H2

40px

H3

32px

H4

24px

Body

18px

Small

16px

Caption

14px

---

# 13. Animation Rules

Page Load

Fade

Slide

Scale

Scroll Reveal

Intersection Observer

Hover

Lift

Shadow Increase

Image Zoom

Buttons

Scale

Ripple

Background Glow

Cards

Float

Tilt (subtle)

Parallax

Minimal

Premium

Never distracting.

---

# 14. Navbar

Sticky

Transparent on Hero

Solid after scrolling

Responsive

Mega menu ready

Mobile Drawer

Animated transitions

---

# 15. Footer

Responsive Grid

Social Icons

Quick Links

Contact

Newsletter

Copyright

Legal Links

---

# 16. Forms

Validation

Required fields

Email validation

Phone validation

Character limits

Success message

Loading state

Error handling

Future

EmailJS

Node Backend

API

---

# 17. Performance

Target Lighthouse

Performance

95+

Accessibility

95+

SEO

95+

Best Practices

100

---

# 18. Optimization

Lazy Loading

Dynamic Imports

Code Splitting

Tree Shaking

Image Compression

Font Optimization

Bundle Optimization

Caching

Preloading

---

# 19. Accessibility

ARIA Labels

Semantic HTML

Keyboard Navigation

Visible Focus

Alt Text

Screen Reader Support

Color Contrast

Reduced Motion Preference

---

# 20. SEO

Dynamic Titles

Meta Tags

Descriptions

Canonical

Robots

Open Graph

Twitter Card

Structured Data

Local Business Schema

Breadcrumb Schema

XML Sitemap

---

# 21. Security

Input Validation

Sanitize User Input

HTTPS Only

Environment Variables

No Sensitive Data in Client

Rate Limiting (Future API)

Spam Protection

CAPTCHA (Future)

---

# 22. Coding Standards

PascalCase

Components

camelCase

Variables

kebab-case

Folders

Single Responsibility Principle

Reusable Components

No Inline Styles

Strict TypeScript

Meaningful Naming

Consistent Imports

---

# 23. Naming Convention

```
HeroSection.tsx

ProductCard.tsx

CTAButton.tsx

PortfolioGrid.tsx

ContactForm.tsx
```

Hooks

```
useScroll.ts

useAnimation.ts

useProducts.ts
```

---

# 24. Asset Standards

Images

WebP Preferred

PNG for Transparent Logos

SVG for Icons

Videos

MP4

Optimized

Fonts

WOFF2

---

# 25. Browser Support

Chrome

Edge

Firefox

Safari

Latest two versions.

---

# 26. Deployment

Platform

Vercel

or

Netlify

Environment Variables

```
VITE_API_URL

VITE_GOOGLE_MAP_KEY

VITE_EMAIL_SERVICE
```

---

# 27. Future Backend Architecture

React Frontend

↓

REST API

↓

Node.js

↓

Express

↓

Database

↓

PostgreSQL

or

Supabase

Future Integrations

Order Management

Customer Login

Payment Gateway

Admin Dashboard

Analytics

Inventory

CRM

---

# 28. Error Handling

404

Custom Page

500

Fallback UI

Network Errors

Retry Option

Form Errors

Inline Validation

Image Errors

Fallback Placeholder

---

# 29. Quality Assurance

Manual Testing

Responsive Testing

Cross Browser Testing

Accessibility Testing

Performance Testing

SEO Testing

Lighthouse Audits

Component Testing

---

# 30. Deliverables

* Production-ready React 19 + Vite application
* Responsive component-based architecture
* Google Stitch design faithfully implemented
* Tailwind CSS styling system
* Framer Motion animations
* Modular routing and layouts
* SEO-ready pages
* Optimized assets and bundle
* Accessible user interface (WCAG-friendly)
* Clean, documented, maintainable codebase
* Ready for future backend integration
* Deployment-ready configuration for Vercel or Netlify

---

# 31. Technical Success Criteria

The application will be considered technically complete when it:

* Builds successfully without warnings or errors.
* Achieves Lighthouse scores above 95 for Performance, Accessibility, and SEO.
* Maintains a fully responsive experience across all major screen sizes.
* Uses reusable, modular React components with TypeScript support.
* Loads quickly through optimized assets, lazy loading, and code splitting.
* Follows modern React and Tailwind CSS best practices.
* Meets accessibility guidelines with semantic HTML, keyboard navigation, and ARIA support.
* Provides a clean architecture that can easily evolve into a full e-commerce platform with authentication, payments, and an admin dashboard.
