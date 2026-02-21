/* =========================================
   KELSIE E. STARK | PHOTOGRAPHY ENGINE
   Fetches JSON data and builds the gallery
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    // Use an absolute path to ensure it works on the custom domain
    const jsonPath = "/json/photography.json"; 

    fetch(jsonPath)
        .then(response => {
            if (!response.ok) throw new Error('404: File not found');
            return response.json();
        })
        .then(data => {
            portfolioGrid.innerHTML = ''; 
            data.forEach(item => {
                const card = document.createElement('article');
                card.className = 'work-card';
                card.innerHTML = `
                    <a href="${item.link || '#'}" class="catalog-link">
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
            console.error('Photography Error:', error);
            portfolioGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--accent);">Unable to load Visual Narratives. (Check: ${jsonPath})</p>`;
        });
});
            console.error('Error loading portfolio:', error);
            portfolioGrid.innerHTML = '<p>Error loading gallery. Please try again later.</p>';
        });
});
