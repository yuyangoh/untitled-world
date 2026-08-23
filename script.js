let currentEntry = null;
let currentImageIndex = 0;

function openEntry(entryId) {
    const entry = entries[entryId];
    console.log("open", entry.date);
    document.getElementById("date").textContent = entry.date;
    document.getElementById("caption").textContent = entry.caption;
    
    currentEntry = entry;
    console.log(currentEntry);
    currentImageIndex = 0;

    showImage();
    
    document.getElementById("content-display").classList.remove("hidden");
}

function showImage() {
    const image = document.getElementById("carousel-image");
    image.src = currentEntry.images[currentImageIndex];
}

function changeImage(direction) {
    currentImageIndex += direction;

    // Go back to the last image
    if (currentImageIndex < 0) {
        currentImageIndex = currentEntry.images.length - 1;
    }

    // Go back to the first image
    if (currentImageIndex >= currentEntry.images.length) {
        currentImageIndex = 0;
    }

    showImage();
}

const entries = {
    entry1: {
        date: "16-11-2025",
        caption: "BUILDING MY FIRST HOME",
        images: [
            "2025-11-16_1.png",
            "2025-11-16_2.png",
            "2025-11-16_3.png"
        ]
    },

    entry2: {
        date: "02.08.2026",
        caption: "RENOVATING MY FIRST HOME",
        images: [
            "2026-08-02_1.png",
            "2026-08-02_2.png",
            "2026-08-02_3.png"
        ]
    },

    entry3: {
        date: "18.08.2026",
        caption: "PATHS",
        images: [
            "2026-08-18_1.png",
            "2026-08-18_2.png",
            "2026-08-18_3.png"
        ]
    }
};

function closeEntry() {
    document.getElementById("content-display").classList.add("hidden");
}