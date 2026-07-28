# Agent Rules Document

# Gifts of Printing Website

**Version:** 1.0
**Project Type:** Premium Printing & Personalized Gifts Business Website
**Development Platform:** Google Antigravity
**Design Source:** Google Stitch (MCP)
**Frontend Framework:** React 19 + Vite

---

# 1. Purpose

This document defines the mandatory rules that Google Antigravity must follow throughout the design, development, and implementation of the Gifts of Printing website.

These rules ensure that every generated component, page, and interaction remains consistent, maintainable, performant, and aligned with the project goals.

These rules take precedence over assumptions.

---

# 2. Project Scope

This project is a **frontend-only business showcase website**.

Generate only the frontend application.

Do **not** generate backend infrastructure unless explicitly requested in a future version.

---

# 3. Technology Stack (Mandatory)

Framework

* React 19
* Vite
* TypeScript

Styling

* Tailwind CSS

Animation

* Framer Motion

Icons

* Lucide React

Routing

* React Router DOM

Forms

* React Hook Form
* Zod Validation

Notifications

* Sonner

---

# 4. Architecture Rules

The project must use a modular, scalable, component-based architecture.

Every page must be composed of reusable components.

Avoid duplicated code.

Separate:

* Components
* Pages
* Utilities
* Constants
* Assets
* Data
* Hooks
* Types

Follow Single Responsibility Principle.

---

# 5. Frontend-Only Rule (Critical)

This website must remain a static frontend application.

Do NOT generate:

* Backend server
* Express.js
* Node.js API
* REST API
* GraphQL
* Database
* Firebase
* Supabase
* MongoDB
* PostgreSQL
* Prisma
* Authentication
* Login
* Signup
* Session management
* Cookies for authentication
* ORM configuration

Website data must come from local JSON files.

---

# 6. Data Rules

Store all content locally.

Examples:

* products.json
* services.json
* testimonials.json
* faq.json
* portfolio.json

No API calls.

No asynchronous fetching for static content.

---

# 7. Routing Rules

Use React Router.

Each page should have a dedicated route.

Pages:

* Home
* About
* Products
* Services
* Portfolio
* FAQ
* Contact
* 404

Lazy-load page components where appropriate.

---

# 8. Component Rules

Every UI element must be reusable.

Examples:

Button

Card

Section

Container

Input

Badge

Accordion

Hero

Navbar

Footer

Gallery

CTA

Do not create duplicate versions of the same component.

---

# 9. Styling Rules

Use Tailwind CSS only.

Avoid:

* Bootstrap
* Material UI
* Chakra UI
* Ant Design
* Inline styles

Create reusable utility classes where beneficial.

Use CSS variables for design tokens.

---

# 10. Animation Rules

Use Framer Motion only.

Animation principles:

* Smooth
* Minimal
* Purposeful
* Fast
* Elegant

Avoid excessive animations.

Respect reduced-motion preferences.

---

# 11. Responsive Rules

The website must be mobile-first.

Support:

* Mobile
* Tablet
* Laptop
* Desktop

No horizontal scrolling.

Touch-friendly controls.

Responsive typography.

---

# 12. Accessibility Rules

Follow WCAG 2.2 AA.

Requirements:

* Semantic HTML
* Keyboard navigation
* Focus indicators
* ARIA labels
* Alt text
* Color contrast compliance
* Screen reader support

Accessibility is mandatory.

---

# 13. Performance Rules

Target Lighthouse:

Performance ≥ 95

Accessibility ≥ 95

SEO ≥ 95

Best Practices = 100

Use:

* Lazy loading
* Optimized images
* Code splitting
* Tree shaking
* Dynamic imports where appropriate

---

# 14. SEO Rules

Every page must include:

* Unique title
* Meta description
* Open Graph metadata
* Structured heading hierarchy
* Meaningful alt text

Generate semantic HTML.

---

# 15. Navigation Rules

Navigation must be:

Sticky

Responsive

Accessible

Smooth

Consistent

Mobile drawer must include animation.

Highlight the active page.

---

# 16. Hero Rules

Every hero section must include:

* Clear headline
* Supporting text
* Primary CTA
* Secondary CTA
* High-quality visuals
* Smooth animations
* Trust indicators

Avoid clutter.

---

# 17. Content Rules

Use professional demo content related to:

* Custom gifts
* Printing
* Corporate branding
* Personalized products

Content should sound realistic.

Do not use placeholder text such as "Lorem Ipsum."

---

# 18. Image Rules

Use placeholders that represent:

* Custom mugs
* T-shirts
* Photo frames
* Keychains
* Corporate gifts
* Printing equipment
* Gift packaging

Images must be responsive.

Use lazy loading.

---

# 19. Form Rules

Forms must include:

* Validation
* Error states
* Success states
* Loading state
* Accessible labels

Do not connect forms to any backend.

Prepare the contact form for future integration with EmailJS or Formspree without implementing those services now.

---

# 20. Error Handling Rules

Provide graceful handling for:

* Missing images
* Missing JSON entries
* Invalid routes (404)
* Empty datasets

Never allow blank or broken layouts.

---

# 21. File Organization Rules

Maintain a clean folder structure.

Separate:

* Assets
* Components
* Hooks
* Utilities
* Data
* Pages
* Layouts
* Types

Avoid deeply nested directories.

---

# 22. Naming Conventions

Use:

PascalCase

Components

camelCase

Variables

kebab-case

Folders

Meaningful file names.

---

# 23. Code Quality Rules

Generate:

* Clean code
* Readable code
* Reusable code
* Well-commented code where logic is non-obvious
* Strong TypeScript typing

Avoid unnecessary complexity.

---

# 24. Dependency Rules

Only install libraries that are required.

Do not introduce unnecessary packages.

Keep the bundle lightweight.

---

# 25. Design Consistency Rules

Every page must follow the approved Design System.

Use:

* Same spacing scale
* Same typography
* Same button styles
* Same card styles
* Same iconography
* Same color palette
* Same animation language

Never introduce inconsistent visual styles.

---

# 26. Google Stitch Compliance

Implement the Google Stitch design faithfully.

Do not redesign layouts unless required for:

* Responsiveness
* Accessibility
* Performance

Maintain spacing, hierarchy, and component structure from the Stitch design.

---

# 27. Build Rules

The project must:

* Compile successfully.
* Run with `npm install` followed by `npm run dev`.
* Produce no TypeScript errors.
* Produce no ESLint errors.
* Avoid console errors or warnings.

---

# 28. Future Compatibility

Structure the codebase so that future features can be added without major refactoring.

Future features may include:

* Online ordering
* Customer accounts
* Admin dashboard
* Payment integration
* Inventory management
* Quote management

Do not scaffold these features now.

---

# 29. Prohibited Behaviors

Do NOT:

* Generate backend code.
* Generate API endpoints.
* Generate authentication flows.
* Add databases.
* Use mock servers.
* Add unnecessary dependencies.
* Create duplicate components.
* Use placeholder "Lorem Ipsum" text.
* Hardcode repeated values across multiple files.
* Ignore accessibility requirements.
* Break the approved design system.

---

# 30. Definition of Success

The generated project is considered successful when:

* It is a production-ready React + Vite frontend.
* Every page matches the approved Google Stitch design.
* Components are modular and reusable.
* The website is fully responsive.
* Performance targets are achieved.
* Accessibility standards are met.
* Static content is managed through local JSON files.
* The codebase is clean, maintainable, and easy to extend.
* The project is ready for deployment on Vercel or Netlify without additional backend configuration.
