function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // Array of image URLs
    const images = [
       'public/images/IMG_0067.jpg',
'public/images/IMG_0077.jpg',
'public/images/IMG_0122.jpg',
'public/images/IMG_0174.jpg',
'public/images/IMG_0178.jpg',
'public/images/IMG_0196.jpg',
'public/images/IMG_0198.jpg',
'public/images/IMG_0203.jpg',
'public/images/IMG_0205.jpg',
'public/images/IMG_0211.jpg',
'public/images/IMG_0213.jpg',
'public/images/IMG_0222.jpg',
'public/images/IMG_0266.jpg',
'public/images/IMG_0273.jpg',
'public/images/IMG_0275.jpg',
'public/images/IMG_0278.jpg',
'public/images/IMG_0298.jpg',
'public/images/IMG_0304.jpg',
'public/images/IMG_0306.jpg',
'public/images/IMG_0400.jpg',
'public/images/IMG_0407.jpg',
'public/images/IMG_0491.jpg',
'public/images/IMG_0536.jpg',
'public/images/IMG_0544.jpg',
'public/images/IMG_0552.jpg',
'public/images/IMG_0668.jpg',
'public/images/IMG_3156.jpg',
'public/images/IMG_3233.jpg',
'public/images/IMG_7875.jpg',
'public/images/IMG_7876.jpg',
'public/images/IMG_7940.jpg',
'public/images/IMG_8934.jpg',
'public/images/IMG_8992.jpg',
'public/images/IMG_9015.jpg',
'public/images/IMG_9017.jpg',
'public/images/IMG_9021.jpg',
'public/images/IMG_9039.jpg',
'public/images/IMG_9040.jpg',
'public/images/IMG_9042.jpg',
'public/images/IMG_9060.jpg',
'public/images/IMG_9078.jpg',
'public/images/IMG_9087.jpg',
'public/images/IMG_9139.jpg',
'public/images/IMG_9148.jpg',
'public/images/IMG_9152.jpg',
'public/images/IMG_9160.jpg',
'public/images/IMG_9196.jpg',
'public/images/IMG_9206.jpg',
'public/images/IMG_9227.jpg',
'public/images/IMG_9266.jpg',
'public/images/IMG_9309.jpg',
'public/images/IMG_9348.jpg',
'public/images/IMG_9409.jpg',
'public/images/IMG_9549.jpg',
'public/images/IMG_9747.jpg',
        // Add more image paths here
    ];

    // Shuffle the image array
    const shuffledImages = shuffleArray(images);

    shuffledImagesimages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Artwork';
        gallery.appendChild(img);
    });
});

