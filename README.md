# Kelsie E. Stark | Fine Art & Poetry Portfolio
**Live Site:** [https://kelsiestark.com](https://kelsiestark.com)

## 🖋️ The Vision
A high-performance, minimalist digital sanctuary designed to showcase the intersection of trauma, resilience, and liberation. This portfolio serves as the professional home for Kelsie E. Stark's visual and written narratives.

## 🛠️ Architecture
This site is built with a **Data-Driven Engine**. Instead of editing complex HTML to add content, the site "reads" from JSON files.

- **Root Structure:** All core folders (`/json`, `/java`, `/css`, `/asset`) reside at the top level to ensure stable paths across the custom domain.
- **Poetry Engine:** Powered by `/java/books.js` and `/json/books.json`.
- **Photography Engine:** Powered by `/java/photography.js` and `/json/photography.json`.
- **Hosting:** Deployed via GitHub Pages with a custom CNAME configuration.

## 🚀 Maintenance Guide

### To Add a New Book:
1. Upload the cover image to `/asset/book/`.
2. Open `/json/books.json`.
3. Copy an existing entry and update the `title`, `image` path, and `description`.

### To Add a New Photography Gallery:
1. Upload the lead image to `/asset/photography/`.
2. Open `/json/photography.json`.
3. Add a new entry with the `link` to the specific gallery collection.

## 🤝 The Connection
This project features a permanent backlink to **Strong Bonds Resilience**, representing a shared commitment to survivor advocacy and veteran support within the El Paso Borderplex.

---
*Hand-coded with purpose by the Coffee & Connections El Paso Tech Team (2026).*
