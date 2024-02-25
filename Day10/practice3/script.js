const sliderImage = document.getElementById("sliderImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 1;

const images = ["image1.jpeg", "image2.jpeg", "image3.jpeg"];

function showImage(index) {
  sliderImage.src = images[index];
}

prevButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);
