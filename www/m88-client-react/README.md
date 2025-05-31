# M88 Client (React Frontend)

## Stack

- React 19, TypeScript, Vite
- Redux Toolkit + RTK Query
- TailwindCSS, Radix UI
- i18next (internationalization)
- Zod (validation)
- axios (REST API)

## Architecture

Feature-sliced: `app`, `pages`, `widgets`, `features`, `entities`, `shared`

## Main Features

- Authentication (login/logout, token storage)
- Protected routes, roles (user/admin)
- Main, profile, dashboard, admin, about, error/404/403 pages
- Internationalization (i18next)
- Toast notifications (sonner)
- Custom UI components (Radix, Tailwind)
- Loaders, skeletons
- Responsive design

## Getting Started

```bash
npm i
npm run dev
```

## Notes

- All UI is built with Tailwind + Radix
- Form validation via react-hook-form + zod
- Routing via react-router v7
- State management via Redux Toolkit
