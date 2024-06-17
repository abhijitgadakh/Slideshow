const images = [
  "./res/01.png",
  "./res/02.png",
  "./res/03.png",
  "./res/04.png",
  "./res/05.png",
];

let currentIndex = 0;
const slideshowElement = document.getElementById("slideshow");

// Set the first image
slideshowElement.src = images[currentIndex];

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshowElement.src = images[currentIndex];
}

// Change image every 2000ms
setInterval(showNextImage, 2000);
