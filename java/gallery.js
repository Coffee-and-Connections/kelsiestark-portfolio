/* =========================================
   KELSIE E. STARK | DYNAMIC GALLERY ENGINE
   Features: NC-17 Gate & Artistic Statement
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('category-grid');
    const title = document.getElementById('gallery-title');
    const subtitle = document.getElementById('gallery-subtitle');

    // 1. Get the ID from the URL (e.g., kelsiestark.com/gallery.html?id=nude)
    const urlParams = new URLSearchParams(window.location.search);
    const targetID = urlParams.get('id');

    // Redirect if no ID is present
    if (!targetID) {
        window.location.href = '/photography/index.html';
        return;
    }

    const cleanID = targetID.toLowerCase();

    // 2. NC-17 CONTENT GATE (Triggers only for 'nude' category)
    if (cleanID === 'nude') {
        const gate = document.createElement('div');
        gate.id = 'content-gate';
        gate.innerHTML = `
            <div class="gate-box">
                <span class="category-tag">Sensitive Content</span>
                <h2>The Raw Form</h2>
                <p>This collection contains artistic nude photography exploring the human landscape and vulnerability. By entering, you confirm you are of legal adult age and wish to view this fine art content.</p>
                <button class="enter-btn" id="gate-entry">Enter Gallery</button>
                <br><br>
                <a href="/photography/index.html" style="color: var(--text-muted); text-decoration:none; font-size: 0.7rem; letter-spacing:1px;">Return to Collections</a>
            </div>
        `;
        document.body.appendChild(gate);

        document.getElementById('gate-entry').addEventListener('click', () => {
            gate.style.opacity = '0';
            setTimeout(() => gate.remove(), 400); 
        });
    }

    // 3. FETCH & FILTER DATA
    fetch('/json/catalog.json')
        .then(res => {
            if (!res.ok) throw new Error('Catalog not found');
            return res.json();
        })
        .then(data => {
            const matches = data.filter(item => item.galleryID.toLowerCase() === cleanID);

            if (matches.length > 0) {
                // Clear the loader and sync headers
                grid.innerHTML = '';
                title.innerText = matches[0].categoryLabel || "Collection";
                subtitle.innerText = matches[0].categoryDesc || "A curated selection of visual narratives.";

                // Build the Image Cards
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

                // 4. DYNAMIC ARTISTIC STATEMENT (Appends only for 'nude' category)
                if (cleanID === 'nude') {
                    const statement = document.createElement('div');
                    statement.className = 'artistic-statement';
                    statement.innerHTML = `
                        <hr class="statement-divider">
                        <div class="statement-content">
                            <h3>The Philosophy of Form</h3>
                            <p>This collection serves as a visual dialogue between the human landscape and the architecture of resilience. In these frames, the body is not an object of gaze, but a vessel of history, trauma, and eventual liberation. By stripping away the external, we find the raw, unfiltered truth of our existence—a sanctuary where vulnerability is the highest form of strength.</p>
                            <span class="artist-signature">Kelsie E. Stark</span>
                        </div>
                    `;
                    grid.after(statement);
                }

            } else {
                grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 4rem; opacity: 0.5;">Collection coming soon.</p>`;
            }
        })
        .catch(err => {
            console.error("Gallery Error:", err);
            grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">Unable to load collection at this time.</p>`;
        });
});
