# WorldGrid — Cybernetic Atlas

A cyberpunk-themed country explorer and trip planner.

## Tech Stack
- React 18 + TypeScript
- Vite
- CSS Modules
- Static country data (60+ countries, no external API needed)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Then open **http://localhost:5173**

## Build for Production

```bash
npm run build
npm run preview
```

## Features

- **Landing Page** — cyberpunk welcome screen with feature overview
- **Countries List** — 60+ countries with flags, search, continent filter, favorites
- **Country Modal** — detailed info: population, area, languages, currencies, borders, timezones
- **Favorites** — star any country, persist across sessions (localStorage)
- **Trip Planner** — drag & drop sidebar, reorder countries, save trips
- **Saved Trips** — view all previously saved routes
- **Plan a Trip button** — from landing page auto-navigates to countries then opens sidebar

## Project Structure

```
src/
  components/
    Navbar.tsx / .module.css
    LandingPage.tsx / .module.css
    CountriesPage.tsx / .module.css
    CountryCard.tsx / .module.css
    CountryModal.tsx / .module.css
    TripSidebar.tsx / .module.css
  data/
    countries.ts          ← 60+ static country records
  hooks/
    useLocalStorage.ts
    utils.ts
  types/
    index.ts
  App.tsx
  main.tsx
  index.css
```
