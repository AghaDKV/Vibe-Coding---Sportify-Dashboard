# Sportify Dashboard – Project Architecture Plan

Based on the provided documentation (Sportify Design System & Apple Design Analysis), this document outlines a highly scalable, maintainable, and premium project architecture for the Sportify Dashboard. 

## 1. Product & Design Analysis

### Feature Requirements (Inferred)
Based on the Design System copy ("Tambah Workout", "Tambah Kalori", "Lihat Semua Riwayat", "Hapus Akun"), the application requires the following modules:
- **Authentication & User Management:** Registration, login, and account deletion.
- **Dashboard/Overview:** Aggregated view of metrics.
- **Workout Tracking:** Logging and viewing past workouts.
- **Nutrition/Calorie Tracking:** Logging daily nutrition.

### Design System Insights
- **Dual Theme Support:** Explicit requirement for Light and Dark modes using a semantic token system (`bg-primary`, `text-brand-primary`, etc.).
- **Premium Aesthetics (Apple-inspired):** The `DESIGN-apple.md` file suggests an emphasis on clean layouts, deliberate whitespace, distinct typography (e.g., negative letter spacing for display text), subtle elevations (only where necessary), and premium micro-interactions (`scale(0.95)` on button presses).
- **Component Specificity:** Explicit button variants (Primary, Secondary, Secondary Color, Tertiary, Error variants) and upcoming requirements for Inputs, Metric Cards, Data Tables, Charts, Modals, and Dropdowns.

---

## 2. Proposed Folder Structure

This architecture adopts a **Feature-Based (Modular) Approach** combined with Next.js/Vite best practices. It encapsulates domain-specific logic while maintaining a robust shared foundation.

```text
src/
├── app/                  # Application Routing (Next.js App Router or React Router config)
│   ├── (auth)/           # Route group for authentication pages
│   ├── (dashboard)/      # Route group for the main application
│   └── layout.tsx        # Root layout including providers and global fonts
│
├── assets/               # Static assets
│   ├── images/           # High-res photography/illustrations
│   └── icons/            # SVG icons (or icon font config)
│
├── components/           # Global & Shared Components
│   ├── ui/               # Base Design System Components (Dumb components)
│   │   ├── Button/       # Button component (with all variants & states)
│   │   ├── Card/         # Base card component for metrics and content
│   │   ├── Input/        # Form inputs, selects, and textareas
│   │   ├── Modal/        # Dialogs and overlays
│   │   └── Table/        # Base data table component
│   ├── layout/           # Structural components
│   │   ├── Sidebar/      # App navigation sidebar
│   │   ├── Header/       # Top global navigation / user menu
│   │   └── PageContainer/# Standardized page wrappers with consistent spacing
│   └── shared/           # Complex components used across multiple features
│       ├── MetricCard/   # Reusable card for dashboard metrics
│       └── EmptyState/   # Reusable empty state UI
│
├── config/               # Environment & App Configuration
│   ├── env.ts            # Environment variable validation
│   └── appConfig.ts      # Global app settings (pagination limits, date formats)
│
├── constants/            # Application Constants
│   ├── routes.ts         # Route path constants (e.g., ROUTES.DASHBOARD)
│   └── queryKeys.ts      # React Query / SWR cache keys
│
├── features/             # Feature Modules (Domain-Driven Design)
│   ├── auth/             # Authentication logic, forms, and services
│   ├── dashboard/        # Dashboard widgets and aggregated charts
│   ├── workouts/         # "Tambah Workout", "Lihat Riwayat", log tables
│   ├── nutrition/        # Calorie tracking logic and forms
│   └── settings/         # User preferences and "Hapus Akun" flow
│
├── hooks/                # Global Custom Hooks
│   ├── useTheme.ts       # Hook for managing Light/Dark mode state
│   ├── useAuth.ts        # Hook for accessing user session
│   └── useMediaQuery.ts  # Responsive breakpoint listener
│
├── lib/                  # Third-party Library Configurations
│   ├── axios.ts          # Axios instance with interceptors
│   ├── dayjs.ts          # Date formatting library config
│   └── classnames.ts     # Utility for merging Tailwind/CSS classes (e.g., clsx/twMerge)
│
├── providers/            # React Context Providers
│   ├── ThemeProvider.tsx # Injects `data-theme` attribute to the `<html>` root
│   ├── AuthProvider.tsx  # Manages authentication state context
│   └── ToastProvider.tsx # Global notification system
│
├── services/             # API Communication Layer
│   ├── api.ts            # Base API client
│   └── endpoints/        # Separated API endpoints (e.g., authApi.ts, workoutApi.ts)
│
├── store/                # Global Client State Management (e.g., Zustand or Redux)
│   └── useUiStore.ts     # State for global UI (sidebar collapse, active modals)
│
├── styles/               # Global Styles and Theme Tokens
│   ├── tokens.css        # CSS Variables mapped from Figma (`--bg-primary`, etc.)
│   ├── typography.css    # Global typography rules (SF Pro / Inter configuration)
│   └── globals.css       # CSS resets and base layer
│
├── types/                # Global TypeScript Definitions
│   ├── api.d.ts          # Standard API response interfaces
│   ├── models.d.ts       # Domain models (User, Workout, CalorieEntry)
│   └── theme.d.ts        # Theme string types
│
└── utils/                # Pure Helper Functions
    ├── formatters.ts     # formatCurrency, formatDate, parseNumber
    └── validators.ts     # Regex and generic validation logic
```

---

## 3. Directory Purposes & Architectural Decisions

- **`features/`:** Prevents the `components/` and `pages/` folders from becoming bloated. Each feature folder (e.g., `workouts/`) contains its own localized components, hooks, and utilities that aren't needed anywhere else. This guarantees **high cohesion and low coupling**.
- **`components/ui/`:** strictly houses "dumb" components that rely purely on props. This acts as the translation layer between the **Figma Design System** and the codebase. No business logic is allowed here.
- **`styles/tokens.css`:** Implements the Light/Dark mode functionality securely. By using a single root data attribute (`<html data-theme="dark">`), all UI components inherently react to the theme change without needing complex JS logic.
- **`providers/`:** Centralizes all React Contexts. Wrapping the app with logic like `ThemeProvider` ensures that the user's color scheme preference is universally available and avoids prop-drilling.
- **`services/` and `lib/`:** Abstracts external dependencies. If the app needs to switch from Axios to Fetch in the future, it only changes in `lib/axios.ts`.

---

## 4. Initial Reusable Modules & Shared Components Needed

Before implementing the first screen, the following foundational pieces must be built based on the Design System:

1. **Token Infrastructure (`styles/tokens.css` & `ThemeProvider.tsx`):**
   - Setup CSS variables mapping for all Semantic Tokens (`--bg-brand-solid`, `--text-primary`, `--border-primary`).
   - Include the utility scales (e.g., `--utility-brand-500`) for specific hover states.

2. **Typography System (`styles/typography.css`):**
   - Apply the clean, premium styling indicated in the Apple design analysis (negative letter-spacing for headers, specific line-heights, smooth anti-aliasing).

3. **Core UI Kit (`components/ui/`):**
   - **`Button` Component:** Needs robust variants (`primary`, `secondary`, `secondary-color`, `tertiary`, `error`) mapping to the Design System, including the `scale(0.95)` micro-animation on press.
   - **`Card` Component:** The base container for the dashboard, observing strict corner radius and border colors for Light/Dark mode.
   - **`Input` Component:** Form fields for authentication and logging workflows.

4. **Layout Components (`components/layout/`):**
   - A highly responsive sidebar/navigation structure to frame the dashboard content.

## 5. Implementation Workflow Strategy

As you provide the PNG UI mockups and Figma MCP links for each screen:
1. I will map the requested UI to the appropriate **Feature** folder.
2. I will identify if any new elements belong in the **Global UI (`components/ui`)** or if they are feature-specific.
3. I will stringently apply the defined CSS Variables (tokens) to ensure perfect 1:1 Light/Dark mode compatibility out of the box.
4. Clean separation between data-fetching (`services/`), business logic (`hooks/`), and presentation (`components/`) will be strictly enforced.
