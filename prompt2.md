# Project: AANI & DANI Restaurant Website

## Overview
AANI & DANI is a modern, high-end restaurant website for a restaurant based in Tangier, Morocco. The project focuses on providing an elegant and interactive user experience to showcase the restaurant's diverse menu and unique atmosphere.

## Technical Stack
- **Frontend:** Next.js (TypeScript)
- **Styling:** CSS (Globals + Component-specific), Tailwind CSS.
- **Backend:** None (The project is currently frontend-only, using local JSON data).
- **Data Management:** Menu data is managed via local JSON files located in `public/data/data_menu/`.

## Website Structure & Pages
- **Home Page (`/`):** 
  - Hero Section with tagline "Where the beauty of nature meets the flavors of AANI & DANI".
  - 3D Carousel for visual highlights.
  - "Our Space" section showcasing the restaurant's vibe with images and videos.
  - Menu preview showcasing popular categories.
- **Menu Page (`/menu`):** 
  - Full interactive menu categorized into sections.
  - Dynamically loads data from JSON files.
- **Contact Page (`/contact`):** 
  - Displays location, working hours, and contact details.
  - Integrated Google Maps.

## Real Restaurant Data
- **Name:** AANI & DANI
- **Phone:** 0653333319 / +212653333319
- **Address:** City center, Food court, Tanger 90000
- **Location URL:** [Google Maps](https://maps.app.goo.gl/xQruzg1wheBpEVXR8)
- **Working Hours:** 
  - Daily: 8:00 AM – 11:00 PM
  - Weekend: 8:00 AM – 12:00 AM
- **Social Media:**
  - Instagram: [aani_dani_maroc](https://www.instagram.com/aani_dani_maroc)
  - Facebook: [AANI-DANI](https://www.facebook.com/people/AANI-DANI/100095314103581/)
  - WhatsApp: [+212653333319](https://api.whatsapp.com/send/?phone=212653333319)

## Menu Categories & Real Food Examples (Sample Data)
The menu is rich and covers various cuisines (Moroccan, Italian, International):

1. **Petits Déjeuners (Breakfast):** Omelettes, Traditional Moroccan breakfast.
2. **Fast Food & Snacks:**
   - **Pizza Margherita:** 70 DH
   - **Cheeseburger:** 75 DH
   - **Tacos au poulet:** 60 DH
   - **Pasticcio au poulet:** 75 DH
3. **Pâtes & Plats (Main Dishes):**
   - **Alfredo Pasta:** 115 DH
   - **Filet de boeuf:** 225 DH
   - **Paëlla aux fruits de mer:** 150 DH
4. **Moroccan Specialties (Tajines):**
   - **Tajine de crevettes (Pil Pil):** 110 DH
   - **Tajine de boeuf aux pruneaux:** 125 DH
   - **Couscous (Every Friday):** Starting from 75 DH
5. **Desserts & Drinks:**
   - Crêpes, Waffles, Tartelettes.
   - Fresh Juices, Mojitos, Specialty Coffee (Illy).

## Key Components
- **Carousel3D:** For high-impact visual presentation.
- **FoodCard & MenuCategoryCard:** For consistent menu display.
- **SpaceSection:** For displaying videos and photos of the restaurant interior.
- **mediaMap:** A utility to map media paths efficiently.
