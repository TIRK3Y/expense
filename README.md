# ExpenseAI

The front end for ExpenseAI, a planned personal finance application for tracking expenses, budgets and savings goals. The repository currently contains an animated marketing landing page and the authentication screens (login, sign-up and password reset), built with Next.js 16, React 19 and Tailwind CSS 4. The application dashboard and back-end integration have not been built yet.

## Features

- Landing page made up of separate, animated sections: navigation bar, hero with a dashboard mock-up, features, bento grid, AI insights section, statistics, how it works, testimonials, pricing, FAQ, call to action and footer
- Scroll and entrance animations with Framer Motion
- Authentication pages under a shared route-group layout: `/login`, `/signup` and `/forgot-password`
- Forms with password visibility toggles and "remember me" option
- SEO metadata, Open Graph and Twitter card configuration in the root layout
- React Compiler enabled in `next.config.ts`

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16.3 (App Router) |
| UI | React 19.2, Tailwind CSS 4 |
| Language | TypeScript 5 |
| Animation | Framer Motion |
| Icons | lucide-react |

`package.json` also declares Supabase, TanStack Query, Zustand, React Hook Form, Zod, Recharts, GSAP and related libraries in preparation for upcoming work; they are not yet used in the source code.

## Getting started

### Prerequisites

- Node.js 20 or later
- npm

### Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000 in a browser.

### Build

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    (auth)/             Login, sign-up and forgot-password pages with a shared layout
    layout.tsx          Root layout, fonts and site metadata
    page.tsx            Landing page composed from section components
  components/
    auth/               Auth card, header, footer and form components
    landing/            One folder per landing page section
public/                 Static assets
```

## Notes

- The authentication forms are not connected to a back end. Submitting a form only logs the values to the browser console; Supabase integration is marked as a TODO.
- Content on the landing page (statistics, testimonials, pricing) is static placeholder copy.

## License

No license has been specified for this project.
