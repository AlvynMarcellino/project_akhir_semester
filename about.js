let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-image');

function showSlide(index) {
    slides.forEach(slide => slide.style.display = 'none');

    slides[index].style.display = 'block';
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

setInterval(() => changeSlide(1), 3000);

showSlide(currentSlide);