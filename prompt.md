# AANI & DANI — Project Prompt

You are working on the **AANI & DANI** restaurant website, a Next.js 14 frontend application for a café/restaurant located in Tangier, Morocco.

## Project Overview

- **Project Name**: AANI & DANI
- **Type**: Restaurant & Café Website (Frontend Only)
- **Location**: City center, Food court, Tanger 90000, Morocco
- **Phone**: +212 653 333 319
- **Tagline**: "Where the beauty of nature meets the flavors of AANI & DANI"

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- CSS Modules / PostCSS
- Next.js Image Optimization

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, menu preview, 3D carousel, space section, CTA |
| `/menu` | Full menu page with poster gallery and categorized menu items |
| `/contact` | Contact page with address, phone, hours, map, social links |

## Menu Structure

The restaurant serves Moroccan, Mediterranean, and international cuisine organized into these sections:

1. **Petits Déjeuners** (Breakfast) — Complete breakfasts, omelettes, croques, extras
2. **Crêpes & Viennoiseries** — Sweet/savory crepes, pancakes, waffles, pastries
3. **Fast Food & Snacks** — Burgers, pizzas, tacos, pasta, tajines, couscous
4. **Pâtes & Plats** — Pasta dishes, main courses, salads
5. **Tartelettes & Pâtisserie** — Desserts, tarts, bakery items
6. **Boissons & Jus** — Coffees, teas, juices, smoothies, milkshakes, mojitos

All prices are in **DH (Moroccan Dirham)**.

## Components

- `Navbar` — Logo, navigation links (Home, Menu, Contact)
- `Footer` — Brand info, contact, hours, social links
- `HeroSection` — Landing banner
- `FoodCard` — Individual food item display
- `MenuCategoryCard` — Category with list of items
- `Carousel3D` — 3D rotating cylinder of featured food images
- `SpaceSection` — Restaurant ambiance showcase

## Data Management

Menu data is stored in JSON files under `public/data/data_menu/`:
- `breakfast-omelette-menu.json`
- `dessert-pastry-bakery-menu.json`
- `drinks-beverages-menu.json`
- `fast-food-snack-menu.json`

Restaurant info is in `app/lib/restaurantInfo.ts`.

## Important Rules

- Always use the restaurant's existing component patterns and styling conventions
- Keep design consistent with the warm, elegant restaurant aesthetic
- All images go in `public/images/`
- Use Next.js Image component for all images
- Prices are in DH format
- Menu items have `name`, `price`, and optional `description`

## Contact Info for Reference

```
Address: City center, Food court, Tanger 90000
Phone: +212 653 333 319
Hours: Mon-Fri 8:00 AM – 11:00 PM | Sat-Sun 8:00 AM – 12:00 AM
Instagram: @aani_dani_maroc
Facebook: AANI & DANI
WhatsApp: +212 653 333 319
```
