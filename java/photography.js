/* =========================================
   KELSIE E. STARK | PHOTOGRAPHY ENGINE
   Fetches JSON data and builds the gallery
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.getElementById('portfolio-grid');

    if (!portfolioGrid) return; // Safety check

    // We use a relative path from the root
    // If the HTML is in a subfolder like /photography/, 
    // the fetch call needs to jump back to root.
    const jsonPath = portfolioGrid.dataset.jsonPath || '../json/photography.json';

    fetch(jsonPath)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            portfolioGrid.innerHTML = ''; // Clear the "Loading" text

            data.forEach(item => {
                const card = document.createElement('article');
                card.className = 'work-card';

                card.innerHTML = `
                    <div class="work-media">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="work-info">
                        <span class="category-tag">${item.category}</span>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
                portfolioGrid.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading portfolio:', error);
            portfolioGrid.innerHTML = '<p>Error loading gallery. Please try again later.</p>';
        });
});
