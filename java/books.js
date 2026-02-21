/* =========================================
   KELSIE E. STARK | BOOK ENGINE
   Fetches JSON data and builds the gallery
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const booksGrid = document.getElementById('books-grid');
    if (!booksGrid) return;

    // This pulls the "/json/books.json" you just set in the HTML
    const jsonPath = booksGrid.getAttribute('data-json-path');

    fetch(jsonPath)
        .then(res => {
            if (!res.ok) throw new Error('JSON file not found');
            return res.json();
        })
        .then(data => {
            booksGrid.innerHTML = ''; // Clear the "Gathering..." message
            
            data.forEach(book => {
                const card = document.createElement('article');
                card.className = 'work-card';

                // Use a placeholder if image is missing, otherwise use the image
                const mediaContent = book.image 
                    ? `<img src="${book.image}" alt="${book.title}" loading="lazy">`
                    : `<div class="cover-placeholder">
                         <span class="placeholder-title">${book.title}</span>
                         <span class="coming-soon">Cover Coming Soon</span>
                       </div>`;

                // We add 'book-media' here to trigger the 2:3 ratio in your CSS
                card.innerHTML = `
                    <div class="work-media book-media">
                        ${mediaContent}
                    </div>
                    <div class="work-info">
                        <span class="category-tag">${book.status || 'Publication'}</span>
                        <h3>${book.title}</h3>
                        <p>${book.description}</p>
                        <div class="work-actions">
                            ${book.buyUrl ? `<a href="${book.buyUrl}" class="btn-sm" target="_blank">Purchase</a>` : ''}
                        </div>
                    </div>
                `;
                booksGrid.appendChild(card);
            });
        })
        .catch(err => {
            console.error('Error:', err);
            booksGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Unable to load the library at this time.</p>`;
        });
});
