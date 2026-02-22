# Kelsie E. Stark | Fine Art & Poetry Portfolio
**Live Site:** [https://kelsiestark.com](https://kelsiestark.com)

## 🖋️ The Vision
A high-performance, minimalist digital sanctuary designed to showcase the intersection of trauma, resilience, and liberation. This portfolio serves as the professional home for Kelsie E. Stark's visual and written narratives.

## 🛠️ Architecture
This site is built with a **Data-Driven Engine**. It uses a "Hub and Spoke" model where one page can represent infinite galleries.

- **Root Structure:** All core folders (`/json`, `/java`, `/css`, `/asset`) reside at the top level for custom domain stability.
- **Dynamic Photography System:** - `photography.json`: Controls the "Doors" (the main gallery categories).
  - `catalog.json`: The "Master List" containing every individual photo.
  - `gallery.html` & `gallery.js`: The engine that filters and displays photos based on the category clicked.
- **Poetry Engine:** Powered by `/java/books.js` and `/json/books.json`.
- **Hosting:** Deployed via GitHub Pages with a custom CNAME configuration and `.nojekyll` bypass.

## 🚀 Maintenance Guide

### To Add a New Book:
1. Upload the cover image to `/asset/book/`.
2. Open `/json/books.json` and add the new entry.

### To Add a New Photography Category:
1. Upload a representative image to `/asset/`.
2. Add a new entry to `/json/photography.json`. 
3. Assign it a unique `galleryID` (e.g., `"galleryID": "new-style"`).

### To Add Photos to an Existing Gallery:
1. Upload images to the `/asset/` folder.
2. Open `/json/catalog.json`.
3. Add an entry for each photo. **Crucial:** Ensure the `galleryID` matches the category you want it to appear in (e.g., `portraits`, `ethereal`, `building`).

## 🤝 The Connection
This project features a permanent backlink to **Strong Bonds Resilience**, representing a shared commitment to survivor advocacy and veteran support within the El Paso Borderplex.

---
*Hand-coded with purpose by the Coffee & Connections El Paso Tech Team (2026).*
