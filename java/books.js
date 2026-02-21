/* =========================================
   KELSIE E. STARK | BOOK ENGINE
   Fetches JSON data and builds the gallery
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const booksGrid = document.getElementById('books-grid');
    if (!booksGrid) return;

    // Use the path from the HTML attribute, or default to root /json/books.json
    const jsonPath = booksGrid.getAttribute('data-json-path') || '/json/books.json';

    fetch(jsonPath)
        .then(res => {
            if (!res.ok) throw new Error('Could not find books.json');
            return res.json();
        })
        .then(data => {
            booksGrid.innerHTML = '';
            // ... the rest of your forEach code stays the same
