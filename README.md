# Kelsie E. Stark | Fine Art & Poetry Portfolio
**Live Site:** [https://kelsiestark.com](https://kelsiestark.com)

## 🖋️ The Vision
A high-performance digital sanctuary showcasing the intersection of trauma, resilience, and liberation. This portfolio is data-driven, allowing for seamless content updates via JSON.

## 🛠️ Architecture
The site uses a "Hub and Spoke" model where a single dynamic gallery page renders content based on URL parameters.

- **Photography Engine:** - `photography.json`: Controls the "Doors" (main categories) on the Hub page.
  - `catalog.json`: The Master List of all individual works.
  - `gallery.js`: Filters content, manages the **Sensitive Content Gate**, and appends Artistic Statements.
- **Poetry Engine:** Powered by `books.js` and `books.json`.
- **Commission System:** Integrated `contact.html` using Formspree for secure, serverless client inquiries.
- **Sensitive Content Logic:** Galleries with the ID `nude` trigger an NC-17 interstitial warning and a "Philosophy of Form" footer.



## 🚀 Maintenance Guide

### To Add Photos to a Gallery:
1. Upload images to `/asset/`.
2. Open `/json/catalog.json`.
3. Create a new entry. Ensure the `galleryID` matches the intended category (e.g., `portraits`, `sensory`, `nude`).

### To Add a New Gallery "Door":
1. Upload a lead image to `/asset/`.
2. Add an entry to `/json/photography.json`.
3. Set a unique `galleryID`. If the content is adult-oriented, use the ID `nude` to trigger the protection gate.

### Pathing Rules (Crucial for Custom Domain):
To ensure the **Gallery Noir** theme loads correctly across the custom domain, always use **Root-Relative Paths**:
- CSS: `/css/style.css`
- Images: `/asset/filename.jpg`
- Links: `/photography/index.html` (Always start with a forward slash `/`).



### Troubleshooting "Ghosts in the Machine":
- **Style/Skeleton Look?** Ensure the `<link>` tag in the HTML head starts with a `/`.
- **"Curating the collection" stuck?** Check for a missing comma or bracket in your JSON files (use a JSON validator).
- **SSL/Security Warnings?** Ensure "Enforce HTTPS" is checked in GitHub Pages settings.
- **Image not loading?** Check for case-sensitivity (GitHub prefers lowercase `.jpg`).

## 🤝 The Connection
This project features a permanent backlink to **Strong Bonds Resilience**, representing a shared commitment to survivor advocacy within the El Paso Borderplex.

---
*Hand-coded with purpose by the Coffee & Connections El Paso Tech Team (2026).*
