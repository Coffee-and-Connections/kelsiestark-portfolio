# Kelsie E. Stark | Fine Art & Poetry Portfolio
**Live Site:** [https://kelsiestark.com](https://kelsiestark.com)

## 🖋️ The Vision
A high-performance digital sanctuary showcasing the intersection of trauma, resilience, and liberation. This portfolio is data-driven, allowing for seamless content updates via JSON.

## 🛠️ Architecture
The site uses a "Hub and Spoke" model. A single gallery page dynamically renders content based on URL parameters.

- **Photography Engine:** - `photography.json`: Controls the "Doors" (main categories) on the Hub page.
  - `catalog.json`: The Master List of all individual works.
  - `gallery.js`: Filters content and manages the **Sensitive Content Gate**.
- **Poetry Engine:** Powered by `books.js` and `books.json`.
- **Sensitive Content Logic:** Any gallery with the ID `nude` automatically triggers an NC-17 interstitial warning and appends a "Philosophy of Form" artistic statement.



## 🚀 Maintenance Guide

### To Add Photos to a Gallery:
1. Upload images to `/asset/`.
2. Open `/json/catalog.json`.
3. Create a new entry. Ensure the `galleryID` matches the intended category (e.g., `portraits`, `sensory`, `nude`).

### To Add a New Gallery "Door":
1. Upload a lead image to `/asset/`.
2. Add an entry to `/json/photography.json`.
3. Set a unique `galleryID`. If the content is adult-oriented, use the ID `nude` to trigger the protection gate.

### Troubleshooting "Ghosts in the Machine":
- **Image not loading?** Check for case-sensitivity (GitHub prefers lowercase `.jpg`).
- **"Curating the collection" stuck?** Check for a missing comma or bracket in your JSON files.
- **Old images showing?** Use a "Cache Buster" by adding `?v=1` to the end of the image path in the JSON.



## 🤝 The Connection
This project features a permanent backlink to **Strong Bonds Resilience**, representing a shared commitment to survivor advocacy within the El Paso Borderplex.

---
*Hand-coded with purpose by the Coffee & Connections El Paso Tech Team (2026).*
