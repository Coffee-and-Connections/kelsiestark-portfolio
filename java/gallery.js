document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('category-grid');
    const title = document.getElementById('gallery-title');
    const subtitle = document.getElementById('gallery-subtitle');

    // 1. Get the ID from the URL (e.g., 'ethereal')
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get('id');

    if (!targetID) {
        window.location.href = '/photography/index.html'; // Send them back if no ID
        return;
    }

    // 2. Fetch the MASTER list of all photos
    // We'll use a new file called catalog.json for the full list
    fetch('/json/catalog.json')
        .then(res => res.json())
        .then(data => {
            // 3. Filter data for matches
            const matches = data.filter(item => item.galleryID === targetID);

            if (matches.length > 0) {
                grid.innerHTML = '';
                title.innerText = matches[0].categoryLabel || "Collection";
                subtitle.innerText = matches[0].categoryDesc || "A curated selection of visual narratives.";

                matches.forEach(photo => {
                    const card = document.createElement('article');
                    card.className = 'work-card';
                    card.innerHTML = `
                        <div class="work-media photo-media">
                            <img src="${photo.image}" alt="${photo.title}" loading="lazy">
                        </div>
                        <div class="work-info">
                            <h3>${photo.title}</h3>
                            <p>${photo.description}</p>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            } else {
                grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Collection coming soon.</p>`;
            }
        })
        .catch(err => console.error("Gallery Error:", err));
});
