# 🚀 Enterprise SaaS Foundation | Next.js 15

A production-ready, highly modular boilerplate designed for scalable SaaS applications. This repository implements a **Domain-Driven Layout** strategy, separating public marketing concerns from authenticated application logic.

## 🏗 Architectural Overview

This boilerplate follows a strict separation of concerns to ensure that as the application grows, the codebase remains maintainable.

### 1. Unified Route Groups

We utilize Next.js Route Groups to manage distinct application contexts without affecting the URL structure:

* **`(website)`**: Handles the SEO-optimized marketing site, landing pages, and legal docs.
* **`(dashboard)`**: A secure, stateful environment for user-authenticated workflows.

### 2. Component Design System

Our `src/components` directory is organized by **Atomic Responsibility**:

* **`common/`**: The "Atoms" (Buttons, Inputs) – stateless and highly reusable.
* **`sections/`**: The "Organisms" (Hero, Pricing) – layout blocks for the marketing site.
* **`dashboard/`**: Specialized components for the internal app (Analytics, User Lists).
* **`charts/ & tables/`**: Data-heavy presentation layers optimized for performance.

---

## 📂 System Hierarchy

```text
src/
├── app/
│   ├── (dashboard)/     # Authenticated App Shell & Routes
│   └── (website)/       # Public Marketing Shell & Routes
├── components/
│   ├── animations/      # Framer Motion orchestration
│   ├── layout/          # Cross-cutting UI (Sidebar, Navbar, Footer)
│   └── ...              # Atomic UI categories
├── context/             # Global State (Auth, Theme, Dashboard State)
├── hooks/               # Logic encapsulation (useAuth, useFetch)
├── lib/                 # Core utilities (Axios interceptors, Helper functions)
└── public/              # Static assets and branding

```

---

## 🛠 Tech Stack & Core Features

| Feature | Implementation |
| --- | --- |
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS (Utility-first) |
| **State Management** | React Context API (Modularized) |
| **Data Fetching** | Axios + Custom `useFetch` hook |
| **Animations** | Framer Motion (Scroll reveal & micro-interactions) |
| **Icons & Media** | Lucide React (standard) |
| **Theming** | CSS Variables + `ThemeContext` (Dark/Light support) |

---

## 🚀 Development Workflow

### Prerequisites

* Node.js 18.x or higher
* NPM / PNPM / Bun

### Setup

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start the development server
npm run dev

```

### Deployment

This project is optimized for **Vercel** but can be containerized using the standard Next.js Dockerfile.

```bash
npm run build

```

---

## 🛡 Performance & Best Practices

* **Optimized Fonts**: Uses `next/font` for zero CLS (Cumulative Layout Shift).
* **Code Splitting**: Dynamic imports used for heavy components (Charts/Modals) to keep the initial bundle small.
* **Motion Wrapper**: A centralized `MotionWrapper` handles GPU-accelerated animations efficiently.
* **Layout Nesting**: Leverages Next.js nested layouts to prevent unnecessary re-renders of Sidebars and Navbars during navigation.

## 🤝 Contribution Guidelines

When adding new features:

1. **UI Components**: Place in `components/common` if it’s a primitive, or a specific folder if it’s a complex feature.
2. **Context**: Keep providers focused. Do not bloat `AuthContext` with dashboard-specific state.
3. **Hooks**: Always extract data-fetching or complex logic into the `hooks/` directory.

---

Designed with ❤️ for high-performance SaaS products.