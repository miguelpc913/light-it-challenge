# Patient Management App

This is a React + TypeScript application that allows users to:

- Fetch and display a list of patients
- Search patients
- Create new patients
- Edit existing patients
- Receive feedback via toast notifications

---

# Running the Application Locally

## Prerequisites

Make sure you have installed:

- Node.js 18 or higher (recommended: latest LTS)
- One package manager:
  - pnpm (recommended)
  - npm
  - yarn

## Install Dependencies

Using pnpm (recommended):

```bash
pnpm install
```

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

---

## Start the Development Server

```bash
pnpm dev
```

or

```bash
npm run dev
```

or

```bash
yarn dev
```

Vite will start the development server and print a local URL, typically:

```
http://localhost:5173
```

Open the URL in your browser.

---

## Build for Production

```bash
pnpm build
```

This command runs:

- TypeScript build
- Vite production build

---

## Preview the Production Build

```bash
pnpm preview
```

This serves the built version locally.

---

## Lint the Project

```bash
pnpm lint
```

---

# Architecture and Design Decisions

## Technology Stack

- React
- TypeScript
- Vite

---

## State Management Strategy

The application separates server state from client state.

### Server State – React Query (@tanstack/react-query)

Used for:

- Fetching patients from the API
- Managing loading and error states
- Handling asynchronous lifecycle

React Query simplifies data fetching and removes the need for manual loading and error state management.

---

### Client State – Zustand

Used for:

- Local CRUD operations (create/edit patients)
- Immediate UI updates
- Session-level state management

Zustand provides a lightweight and scalable state solution with minimal boilerplate.

---

## Forms and Validation

- react-hook-form for form state management
- zod for schema validation
- @hookform/resolvers for integration

Reasons for this choice:

- Minimal re-renders
- Centralized validation schema
- Type-safe form validation
- Clean and maintainable logic

Validation rules are defined once using zod and reused by the form.

---

## Styling Approach

- Plain CSS per component (e.g., `PatientForm.css`)
- No external UI framework
- Using BEM as naming convention.

# Project Structure

The project follows a **feature-oriented structure with clear responsibility separation**.
Each folder has a specific purpose to keep the codebase scalable and maintainable.

```
src/
 ├── components/
 │    ├── patient/
 │    ├── ui/
 │
 ├── store/
 ├── providers/
 ├── hooks/
 ├── types/
 ├── App.tsx
 └── main.tsx
```

Below is a detailed explanation of each part.

---

## `main.tsx`

Entry point of the application.

Responsibilities:

- Bootstraps React
- Mounts the application to the DOM
- Wraps the app with global providers (e.g., React Query Provider, ToastProvider)

---

## `App.tsx`

Main application layout.

Responsibilities:

- Defines high-level page composition
- Connects major feature components
- Keeps layout orchestration separate from feature logic

---

## `components/`

Contains all React components.
This folder is divided by **domain and responsibility**.

---

### `components/patient/`

Feature-specific components related to patient management.

Example structure:

```
patient/
 ├── PatientList.tsx
 ├── PatientForm.tsx
 ├── PatientCard.tsx
 ├── usePatientList.ts
 ├── PatientForm.css
```

Responsibilities:

- Rendering patient lists
- Managing patient creation and editing
- Handling feature-level logic
- Encapsulating feature-specific styles

This keeps patient logic isolated and easy to extend.

---

### `components/ui/`

Reusable, generic UI components not tied to any specific domain.

These components are:

- Reusable
- Framework-agnostic
- Independent of business logic

This separation ensures UI primitives can be reused across future features.

---

## `store/`

Contains Zustand stores.

---

## `providers/`

Contains application-level providers.

---

## `types/`

Shared TypeScript types and interfaces.

Example:

```
types/
 └── patient.ts
```

Responsibilities:

- Defining domain models (e.g., `Patient`)
- Sharing types between store, components, and forms
- Preventing type duplication

Centralizing types improves maintainability and reduces drift.

---

# Tools Used

| Tool            | Purpose                 |
| --------------- | ----------------------- |
| React           | UI framework            |
| TypeScript      | Type safety             |
| Vite            | Build tool              |
| React Query     | Server state management |
| Zustand         | Client state management |
| React Hook Form | Form handling           |
| Zod             | Schema validation       |
| ESLint          | Code quality            |
| Prettier        | Formatting              |

---
