# User Stories & Acceptance Criteria

# Gifts of Printing Website

**Version:** 1.0
**Project Type:** Premium Printing & Personalized Gifts Website
**Frontend:** React 19 + Vite
**Design:** Google Stitch (MCP)
**Development:** Google Antigravity

---

# 1. Introduction

This document defines the functional user stories and acceptance criteria for the Gifts of Printing website. Each story represents a user goal and provides measurable acceptance criteria to ensure successful implementation.

---

# 2. Primary User Roles

## Visitor

A person browsing the website to learn about products and services.

---

## Customer

A visitor interested in requesting a quotation or placing a custom printing order.

---

## Business Client

A company representative looking for bulk printing, corporate gifts, or branding services.

---

## Website Administrator (Future)

A business owner managing products, enquiries, portfolio items, and website content.

---

# Epic 1: Homepage Experience

---

## US-001: View Homepage

**User Story**

As a visitor, I want to immediately understand what Gifts of Printing offers so that I know whether the business provides the products or services I need.

### Acceptance Criteria

* Homepage loads in under 3 seconds on a standard broadband connection.
* Hero section clearly explains the business.
* Primary CTA is visible above the fold.
* Secondary CTA is available.
* Hero image is high quality and responsive.
* Navigation is immediately accessible.
* Website branding is clearly visible.

---

## US-002: Navigate the Website

**User Story**

As a visitor, I want to move between pages easily so that I can explore the website without confusion.

### Acceptance Criteria

* Navigation appears on every page.
* Current page is highlighted.
* Mobile menu opens smoothly.
* Navigation closes automatically after selecting a menu item.
* No broken links exist.

---

# Epic 2: Product Discovery

---

## US-003: Browse Products

**User Story**

As a customer, I want to browse different gift categories so that I can find products that suit my needs.

### Acceptance Criteria

* Product categories are clearly displayed.
* Every product has an image.
* Every product has a title.
* Every product includes a short description.
* Products are responsive across all devices.

---

## US-004: View Product Details

**User Story**

As a visitor, I want to learn more about a product before making an enquiry.

### Acceptance Criteria

* Product information is easy to read.
* Images are high resolution.
* Customization options are listed.
* CTA is visible on every product.

---

# Epic 3: Services

---

## US-005: Explore Printing Services

**User Story**

As a visitor, I want to understand the available printing services so that I know whether the company can complete my project.

### Acceptance Criteria

* Services are grouped logically.
* Every service includes a description.
* Relevant illustrations or images are displayed.
* CTA encourages users to request a quotation.

---

# Epic 4: Portfolio

---

## US-006: Browse Previous Work

**User Story**

As a customer, I want to see previous work so that I can judge the quality of printing.

### Acceptance Criteria

* Portfolio displays high-quality images.
* Images load efficiently.
* Gallery supports responsive layouts.
* Clicking an image opens a larger preview.
* Categories can be filtered (if implemented).

---

# Epic 5: Company Information

---

## US-007: Learn About the Company

**User Story**

As a visitor, I want to know who the company is so that I feel confident doing business with them.

### Acceptance Criteria

* Company story is presented clearly.
* Mission and vision are displayed.
* Business values are included.
* Content is easy to read.

---

# Epic 6: Testimonials

---

## US-008: Read Customer Reviews

**User Story**

As a customer, I want to read reviews from previous clients so that I can build trust before contacting the business.

### Acceptance Criteria

* Testimonials include customer names (or business names where appropriate).
* Reviews are readable.
* Ratings are displayed consistently.
* Layout is responsive.

---

# Epic 7: FAQ

---

## US-009: Find Answers Quickly

**User Story**

As a visitor, I want answers to common questions so that I don't have to contact the business for basic information.

### Acceptance Criteria

* FAQs are grouped logically.
* Accordion opens smoothly.
* Only one question expands at a time (optional).
* Keyboard navigation is supported.

---

# Epic 8: Contact

---

## US-010: Contact the Business

**User Story**

As a customer, I want multiple ways to contact the business so that I can choose my preferred communication method.

### Acceptance Criteria

* Phone number is visible.
* Email address is visible.
* WhatsApp button is available.
* Business address is shown.
* Google Map is embedded.
* Contact information is clickable on supported devices.

---

## US-011: Submit an Enquiry

**User Story**

As a customer, I want to submit my enquiry online so that the business can contact me later.

### Acceptance Criteria

* Contact form validates required fields.
* Email format is validated.
* Phone number is validated.
* Success message is displayed after submission.
* Error message appears if submission fails.
* Submit button shows loading state.

---

# Epic 9: Mobile Experience

---

## US-012: Use Website on Mobile

**User Story**

As a mobile user, I want the website to work smoothly on my phone so that I can browse comfortably.

### Acceptance Criteria

* No horizontal scrolling.
* Buttons are touch-friendly.
* Images scale correctly.
* Typography remains readable.
* Navigation works on mobile devices.

---

# Epic 10: Accessibility

---

## US-013: Accessible Browsing

**User Story**

As a user with accessibility needs, I want to use the website without barriers.

### Acceptance Criteria

* Keyboard navigation works.
* Focus indicators are visible.
* Images contain alternative text.
* Color contrast meets WCAG AA.
* Forms include accessible labels.

---

# Epic 11: Performance

---

## US-014: Fast Website

**User Story**

As a visitor, I want pages to load quickly so that I don't have to wait.

### Acceptance Criteria

* Images are optimized.
* Lazy loading is implemented where appropriate.
* Lighthouse Performance score exceeds 95.
* Layout shifts are minimized.

---

# Epic 12: SEO

---

## US-015: Discover Website Through Search

**User Story**

As a potential customer, I want to find the website through search engines when searching for custom printing services.

### Acceptance Criteria

* Each page has a unique title.
* Meta descriptions are provided.
* Images include alt text.
* Structured data is implemented.
* Sitemap is generated.

---

# Epic 13: Future Online Ordering

---

## US-016: Place an Online Order (Future)

**User Story**

As a customer, I want to order customized products online so that I can complete my purchase without contacting the business.

### Acceptance Criteria

* Customers can choose products.
* Customers can upload artwork.
* Customers can enter customization details.
* Order summary is displayed.
* Payment integration is supported.

---

# Epic 14: Future Customer Accounts

---

## US-017: Customer Login (Future)

**User Story**

As a returning customer, I want to log into my account so that I can track my previous enquiries and future orders.

### Acceptance Criteria

* Secure authentication.
* Password reset functionality.
* Profile management.
* Order history.
* Saved contact details.

---

# Epic 15: Future Admin Dashboard

---

## US-018: Manage Website Content (Future)

**User Story**

As an administrator, I want to manage products, enquiries, portfolio items, and website content so that the website remains up to date.

### Acceptance Criteria

* Secure admin login.
* Dashboard overview.
* CRUD operations for products.
* CRUD operations for portfolio items.
* Enquiry management.
* Media management.

---

# Non-Functional Acceptance Criteria

## Performance

* Lighthouse Performance ≥ 95
* Accessibility ≥ 95
* SEO ≥ 95
* Best Practices = 100

---

## Responsiveness

* Fully responsive on desktop, laptop, tablet, and mobile.
* No layout breaking at standard breakpoints.

---

## Browser Compatibility

Supports the latest two versions of:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

---

## Accessibility

* WCAG 2.2 AA compliant
* Keyboard accessible
* Screen reader compatible
* Visible focus indicators
* Semantic HTML

---

## Security

* Client-side input validation
* Secure handling of future API requests
* No sensitive data exposed in frontend code
* HTTPS-ready deployment

---

# Definition of Done

A user story is considered complete when:

* Functional requirements are fully implemented.
* Acceptance criteria are satisfied.
* Responsive behavior is verified.
* Accessibility checks pass.
* Performance targets are achieved.
* Cross-browser testing is completed.
* No critical UI or functional defects remain.
* Code follows the project's React + Vite architecture and coding standards.
