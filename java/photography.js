/* =========================================
   KELSIE E. STARK | PHOTOGRAPHY ENGINE
   Fetches JSON data and builds the gallery
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    const jsonPath = portfolioGrid.dataset.jsonPath || '../json/photography.json';

    fetch(jsonPath)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            portfolioGrid.innerHTML = ''; 

            data.forEach(item => {
                // We create the article, but we'll put the link INSIDE or AROUND it
                const card = document.createElement('article');
                card.className = 'work-card';

                // This wraps the image and text so the WHOLE card is a clickable catalog
                card.innerHTML = `
                    <a href="${item.link || '#'}" style="text-decoration: none; color: inherit;">
                        <div class="work-media photo-media">
                            <img src="${item.image}" alt="${item.title}" loading="lazy">
                        </div>
                        <div class="work-info">
                            <span class="category-tag">${item.category || 'Gallery'}</span>
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    </a>
                `;
                portfolioGrid.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error loading portfolio:', error);
            portfolioGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Error loading gallery. Please check your JSON file.</p>';
        });
});
            console.error('Error loading portfolio:', error);
            portfolioGrid.innerHTML = '<p>Error loading gallery. Please try again later.</p>';
        });
});
