document.addEventListener('DOMContentLoaded', () => {
    const booksGrid = document.getElementById('books-grid');
    if (!booksGrid) return;

    const jsonPath = booksGrid.dataset.jsonPath || '../json/books.json';

    fetch(jsonPath)
        .then(res => res.json())
        .then(data => {
            booksGrid.innerHTML = '';
            data.forEach(book => {
                const card = document.createElement('article');
                card.className = 'work-card';

                // Handle "Coming Soon" covers
                const mediaContent = book.image 
                    ? `<img src="${book.image}" alt="${book.title}" loading="lazy">`
                    : `<div class="cover-placeholder">
                         <span class="placeholder-title">${book.title}</span>
                         <span class="coming-soon">Cover Coming Soon</span>
                       </div>`;

                card.innerHTML = `
                    <div class="work-media">
                        ${mediaContent}
                    </div>
                    <div class="work-info">
                        <span class="category-tag">${book.status || 'Publication'}</span>
                        <h3>${book.title}</h3>
                        <p>${book.description}</p>
                        <div class="work-actions">
                            ${book.buyUrl ? `<a href="${book.buyUrl}" class="btn-sm">Purchase</a>` : ''}
                            ${book.previewUrl ? `<a href="${book.previewUrl}" class="btn-sm secondary">Preview</a>` : ''}
                        </div>
                    </div>
                `;
                booksGrid.appendChild(card);
            });
        });
});
