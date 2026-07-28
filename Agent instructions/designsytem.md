# Design System Document

# Gifts of Printing

**Version:** 1.0
**Project Type:** Premium Printing & Personalized Gifts Website
**Design Platform:** Google Stitch (MCP)
**Development Platform:** Google Antigravity
**Frontend:** React 19 + Vite

---

# 1. Purpose

The Gifts of Printing Design System establishes a unified visual language and reusable component library for the website.

Its purpose is to ensure:

* Visual consistency
* Faster development
* Better scalability
* Improved accessibility
* Easier maintenance
* Reusable UI components
* Consistent branding
* Predictable user experience

Every screen, page, and component must follow this design system.

---

# 2. Design Philosophy

The design language is based on four principles:

### Premium

Elegant layouts with generous whitespace and refined typography.

### Creative

Vibrant visuals that reflect customization and printing creativity.

### Modern

Minimal interfaces inspired by Apple, Stripe, Linear, and Framer.

### Human

Friendly interactions with clear guidance and intuitive navigation.

---

# 3. Design Tokens

Design tokens serve as the foundation for all UI elements.

---

## Color Tokens

### Primary

Royal Blue

Purpose

* Primary Buttons
* Navigation
* Important Links
* Active States
* Highlights

---

### Secondary

Modern Purple

Purpose

* Secondary Buttons
* Decorative Elements
* Icons
* Background Gradients

---

### Accent

Warm Orange

Purpose

* Offers
* Promotional Badges
* CTA Highlights
* Hover Accents

---

### Success

Emerald Green

Purpose

* Success Messages
* Confirmations
* Positive Status

---

### Warning

Golden Yellow

Purpose

* Pending Actions
* Warnings
* Notifications

---

### Error

Soft Red

Purpose

* Errors
* Validation
* Alerts

---

### Neutral Colors

White

Gray 50

Gray 100

Gray 200

Gray 300

Gray 400

Gray 500

Gray 600

Gray 700

Gray 800

Gray 900

Black

Neutral colors should be used for typography, backgrounds, borders, and layouts.

---

# 4. Typography System

## Font Family

Primary

Modern Sans-serif

Fallback

System Sans-serif

---

## Font Weights

Light

Regular

Medium

Semi Bold

Bold

Extra Bold

---

## Type Scale

Display XL

Display L

Display M

H1

H2

H3

H4

H5

Body Large

Body Regular

Body Small

Caption

Button Text

Label

Overline

Maintain consistent hierarchy across all pages.

---

# 5. Spacing System

Follow an 8-point spacing scale.

Available spacing units

4

8

12

16

24

32

40

48

64

80

96

128

160

Spacing should remain proportional across all layouts.

---

# 6. Border Radius

Extra Small

6px

Small

8px

Medium

12px

Large

16px

Extra Large

24px

Full

9999px

---

# 7. Shadow System

### Level 1

Subtle

Used for

Inputs

Buttons

Small Cards

---

### Level 2

Medium

Used for

Product Cards

Testimonials

Feature Cards

---

### Level 3

Large

Used for

Hero Cards

Floating Panels

Dialogs

---

### Level 4

Floating

Used sparingly.

---

# 8. Grid System

Desktop

12 Columns

Laptop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Content width

Maximum

1440px

Container

1280px

Section Padding

Responsive

---

# 9. Layout Principles

Each page follows

Navigation

↓

Hero

↓

Content Sections

↓

CTA

↓

Footer

Avoid inconsistent layouts.

---

# 10. Iconography

Use

Lucide React

Rules

Outline style

Rounded corners

Consistent stroke width

No filled icons

Simple

Minimal

---

# 11. Illustration Style

Minimal

Modern

Flat

Semi-3D (optional)

Soft gradients

Avoid cartoon-like illustrations.

---

# 12. Photography Style

Real photography only.

Images should include

Customized products

Printing process

Machines

Happy customers

Gift packaging

Corporate orders

Lifestyle usage

Use bright, high-resolution images.

---

# 13. Buttons

Variants

Primary

Secondary

Outline

Ghost

Text

Danger

Icon Button

---

States

Default

Hover

Pressed

Focused

Disabled

Loading

Buttons should include

Rounded corners

Smooth transitions

Accessible contrast

Visible focus ring

Consistent sizing

---

# 14. Inputs

Variants

Text

Email

Phone

Textarea

Dropdown

Search

Checkbox

Radio

Upload

Date

---

States

Empty

Focused

Typing

Error

Success

Disabled

Loading

---

# 15. Cards

Reusable Cards

Product Card

Service Card

Portfolio Card

Review Card

Feature Card

Team Card

Statistic Card

Pricing Card

CTA Card

Each card includes

Rounded corners

Padding

Shadow

Hover animation

Responsive layout

---

# 16. Badges

Variants

New

Popular

Sale

Premium

Custom

Bulk Order

Corporate

Rounded pill design.

---

# 17. Chips

Used for

Categories

Filters

Tags

Services

Active

Inactive

Selected

---

# 18. Navigation Components

Desktop Navigation

Sticky

Transparent Hero

Solid on Scroll

Dropdown Ready

Active Indicator

---

Mobile Navigation

Drawer

Animated

Large Touch Targets

Accessible

---

# 19. Hero Components

Display Heading

Supporting Text

Primary CTA

Secondary CTA

Background Illustration

Floating Product Images

Trust Badges

Animated Shapes

---

# 20. Product Components

Image

Title

Short Description

Category Badge

Customization Label

CTA Button

Hover Animation

---

# 21. Gallery Components

Responsive Grid

Hover Overlay

Image Zoom

Fullscreen Preview

Category Filter

Lazy Loading

---

# 22. Testimonials

Customer Image

Name

Business

Rating

Review

Company Logo (Optional)

Carousel support.

---

# 23. FAQ Components

Accordion

Smooth Expansion

Category Filters

Search

Accessible keyboard controls.

---

# 24. Statistics

Animated Counter

Label

Icon

Optional Description

Use for

Orders

Customers

Years of Experience

Products

Projects

---

# 25. Timeline

Vertical

Horizontal

Animated

Responsive

Used for

Company History

Order Process

Printing Workflow

---

# 26. Modal System

Variants

Confirmation

Image Preview

Success

Warning

Error

Video Preview

Quote Request

Include

Backdrop

Close Button

Keyboard Support

Focus Trap

---

# 27. Toast Notifications

Success

Error

Warning

Information

Top Right Position

Auto Dismiss

Accessible

---

# 28. Loading Components

Skeleton Cards

Skeleton Images

Skeleton Text

Button Loading

Progress Indicator

Avoid layout shifts.

---

# 29. Empty States

Illustration

Title

Description

CTA Button

Examples

No Products

No Search Results

Portfolio Empty

404

---

# 30. Animation System

Framework

Framer Motion

Animation Types

Fade

Slide

Scale

Reveal

Rotate (minimal)

Float

Parallax

Counter

Hover Lift

Image Zoom

Button Ripple

Duration

200ms to 600ms

Easing

Ease In Out

Motion should always feel subtle and premium.

---

# 31. Motion Principles

Animations must

Guide attention

Provide feedback

Improve usability

Avoid distraction

Respect reduced-motion preferences

---

# 32. Accessibility Standards

WCAG 2.2 AA

Keyboard Navigation

Screen Reader Support

High Contrast

Visible Focus Ring

Touch Targets

Minimum 44×44 pixels

Alt Text

ARIA Labels

Semantic HTML

---

# 33. Responsive Design Rules

Desktop

Large spacing

Rich layouts

Multi-column grids

---

Tablet

Reduced spacing

Two-column layouts

Touch optimized

---

Mobile

Single-column layout

Bottom-friendly interactions

Compact navigation

No horizontal scrolling

---

# 34. Component Naming

PascalCase

Examples

Button

HeroSection

ProductCard

GalleryGrid

ReviewCard

FAQAccordion

ContactForm

QuoteModal

---

# 35. Design Assets

Logo

Light Version

Dark Version

Icon Version

Favicon

Social Icons

Brand Patterns

Background Shapes

Illustrations

Photography

---

# 36. Reusable UI Library

Buttons

Cards

Forms

Inputs

Navigation

Footer

Hero

Accordion

Tabs

Badges

Chips

Timeline

Gallery

Carousel

Testimonials

Statistics

CTA

Modal

Toast

Loader

Breadcrumb

Pagination

Avatar

Tooltip

Dropdown

Every component should be designed once and reused throughout the application.

---

# 37. Design Do's

* Maintain generous whitespace.
* Keep typography consistent.
* Use high-quality photography.
* Keep animations subtle.
* Prioritize accessibility.
* Use reusable components.
* Preserve visual hierarchy.
* Ensure responsive behavior across all devices.

---

# 38. Design Don'ts

* Do not mix icon styles.
* Do not introduce inconsistent colors.
* Do not overuse gradients or glass effects.
* Do not rely on heavy animations.
* Do not use low-resolution images.
* Do not overcrowd layouts.
* Do not create one-off component styles.
* Do not sacrifice accessibility for aesthetics.

---

# 39. Future Expansion

The design system should support future additions without redesigning the foundation.

Future-ready components include:

* Online Store
* Shopping Cart
* Checkout
* User Authentication
* Customer Dashboard
* Admin Panel
* Order Tracking
* AI Product Preview
* Live Chat
* Blog
* Reviews
* Wishlist
* Loyalty Program
* Multi-language Support

---

# 40. Success Criteria

The design system will be considered successful when:

* Every page shares a unified visual identity.
* Components are reusable and consistent.
* The interface scales efficiently as new features are added.
* Developers can build new pages using existing design patterns.
* The website maintains a premium appearance across desktop, tablet, and mobile.
* Accessibility and usability remain integral to every component.
* Google Stitch designs translate directly into a clean, maintainable React + Vite implementation with minimal redesign.
