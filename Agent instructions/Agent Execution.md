# AI Agent Execution Protocol

# Document Loading & Execution Strategy

**Project:** Gifts of Printing
**Version:** 1.0
**Target Agent:** Google Antigravity
**Frontend:** React 19 + Vite
**Design Source:** Google Stitch (MCP)

---

# 1. Purpose

This document defines how the AI agent should execute the project and which project documents should be referenced before performing any task.

The objective is to:

* Reduce hallucinations
* Maintain consistency
* Prevent conflicting implementations
* Minimize unnecessary context loading
* Ensure every decision follows the approved project documentation

This document has the highest execution priority.

---

# 2. Document Priority

The agent must treat the project documents in the following order of importance:

| Priority | Document                           | Purpose                                                        |
| -------- | ---------------------------------- | -------------------------------------------------------------- |
| 1        | Agent Rules                        | Defines mandatory implementation rules and constraints         |
| 2        | PRD                                | Defines project goals, scope, and business requirements        |
| 3        | Technical Specification            | Defines architecture, technologies, and coding standards       |
| 4        | Design System                      | Defines reusable UI components, tokens, and visual consistency |
| 5        | UI/UX Design Specification         | Defines layouts, interactions, and user experience             |
| 6        | User Stories & Acceptance Criteria | Defines functionality and completion requirements              |

When conflicts occur, higher-priority documents override lower-priority ones.

---

# 3. Global Rules

Before performing any task, the agent must:

1. Read the Agent Rules.
2. Identify the task category.
3. Load only the documents required for that task.
4. Avoid loading unnecessary documents.
5. Follow the defined priority order.
6. Never assume requirements that are not documented.

---

# 4. Task-Based Document Loading

## A. Project Initialization

### Read

* Agent Rules
* PRD
* Technical Specification

### Purpose

Understand the project scope, architecture, and implementation constraints before generating any files.

---

## B. Creating Folder Structure

### Read

* Agent Rules
* Technical Specification

### Purpose

Generate the correct React + Vite project structure.

---

## C. Installing Dependencies

### Read

* Agent Rules
* Technical Specification

### Purpose

Install only approved libraries and avoid unnecessary dependencies.

---

## D. Building the Design System

### Read

* Agent Rules
* Design System

### Purpose

Create reusable components, design tokens, spacing, typography, and color variables.

---

## E. Creating Layout Components

Examples:

* Navbar
* Footer
* Main Layout
* Container

### Read

* Agent Rules
* Design System
* UI/UX Design Specification

---

## F. Creating Reusable UI Components

Examples:

* Button
* Card
* Input
* Badge
* Modal
* Accordion
* Tabs

### Read

* Agent Rules
* Design System

---

## G. Creating Individual Pages

Examples:

* Home
* About
* Products
* Services
* Portfolio
* Contact
* FAQ

### Read

* Agent Rules
* PRD
* UI/UX Design Specification
* Design System

---

## H. Implementing Routing

### Read

* Agent Rules
* Technical Specification

---

## I. Implementing Responsive Design

### Read

* Agent Rules
* UI/UX Design Specification
* Design System

---

## J. Implementing Animations

### Read

* Agent Rules
* UI/UX Design Specification
* Design System

### Requirements

Use only Framer Motion.

---

## K. Styling Components

### Read

* Agent Rules
* Design System

---

## L. Implementing Forms

### Read

* Agent Rules
* Technical Specification
* UI/UX Design Specification

### Requirements

* Frontend only
* Validation only
* No backend integration
* Ready for future EmailJS or Formspree integration

---

## M. Loading Website Content

### Read

* PRD
* User Stories

Use local JSON files only.

---

## N. Implementing SEO

### Read

* Technical Specification
* PRD

---

## O. Accessibility

### Read

* Technical Specification
* UI/UX Design Specification

---

## P. Performance Optimization

### Read

* Technical Specification

---

## Q. Testing Components

### Read

* Technical Specification
* User Stories

---

## R. Validating Completed Features

### Read

* User Stories & Acceptance Criteria

Each feature must satisfy its acceptance criteria before being marked complete.

---

## S. Refactoring Code

### Read

* Agent Rules
* Technical Specification

Maintain architecture and coding standards.

---

## T. Adding New Components

### Read

* Agent Rules
* Design System

Avoid creating duplicate components.

---

## U. Future Feature Development

Examples:

* Admin Dashboard
* Online Ordering
* Customer Accounts

### Read

* PRD
* Technical Specification
* User Stories

Only implement if explicitly requested.

---

# 5. Decision Matrix

| Task               | Required Documents                          |
| ------------------ | ------------------------------------------- |
| Folder Structure   | Agent Rules, Technical Specification        |
| Routing            | Agent Rules, Technical Specification        |
| Layout             | Agent Rules, Design System, UI/UX           |
| UI Components      | Agent Rules, Design System                  |
| Pages              | Agent Rules, PRD, UI/UX, Design System      |
| Styling            | Agent Rules, Design System                  |
| Responsive Design  | Agent Rules, UI/UX, Design System           |
| Forms              | Agent Rules, Technical Specification, UI/UX |
| Animations         | Agent Rules, Design System, UI/UX           |
| SEO                | Technical Specification, PRD                |
| Accessibility      | Technical Specification, UI/UX              |
| Performance        | Technical Specification                     |
| Feature Validation | User Stories                                |
| Code Refactoring   | Agent Rules, Technical Specification        |

---

# 6. Mandatory Validation Before Every Task

Before implementing any feature, the agent must verify:

* Is this feature defined in the PRD?
* Does it follow the Agent Rules?
* Does it comply with the Technical Specification?
* Does it use existing Design System components?
* Does it match the UI/UX Design Specification?
* Does it satisfy the User Story acceptance criteria?

If the answer to any required check is **No**, implementation must stop until the issue is resolved.

---

# 7. Conflict Resolution

If two documents conflict, resolve them using this order:

1. Agent Rules
2. PRD
3. Technical Specification
4. Design System
5. UI/UX Design Specification
6. User Stories & Acceptance Criteria

Higher-priority documents always override lower-priority documents.

---

# 8. Context Optimization Rules

To reduce unnecessary context and improve generation quality:

* Load only the documents required for the current task.
* Do not reload documents already available in the active context unless they have changed.
* Avoid referencing unrelated specifications.
* Prefer reusable components instead of generating new ones.
* Reuse existing project patterns whenever possible.

---

# 9. Completion Checklist

A task is complete only when:

* The correct documents were consulted.
* Implementation follows the Agent Rules.
* Code matches the Technical Specification.
* UI matches the Design System.
* UX follows the UI/UX Design Specification.
* Acceptance criteria are satisfied.
* No unnecessary dependencies or architectural changes were introduced.
* The implementation integrates cleanly with the existing React + Vite project.

---

# 10. Final Execution Directive

The AI agent must treat this document as the orchestration guide for the entire project. Before starting any implementation, it shall determine the task category, load only the relevant documents listed in this protocol, and execute the work in accordance with the established document priority. The agent must not invent requirements, bypass project constraints, or introduce technologies beyond those explicitly approved for this frontend-only React + Vite application.
