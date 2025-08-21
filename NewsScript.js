let currentIndex = 0;

function showSlide(index) {
  const images = document.querySelectorAll(".carousel-images img");
  const dots   = document.querySelectorAll(".dot");

  if (index >= images.length) currentIndex = 0;
  else if (index < 0)          currentIndex = images.length - 1;
  else                          currentIndex = index;

  images.forEach((img, i) => img.classList.toggle("active", i === currentIndex));
  dots.forEach((dot, i)   => dot.classList.toggle("active", i === currentIndex));
}

function moveSlide(n) {
  showSlide(currentIndex + n);
}

function goToSlide(n) {
  showSlide(n);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(0);
});
