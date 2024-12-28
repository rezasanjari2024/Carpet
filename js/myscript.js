let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    updateDots();
}

// تغییر وضعیت دات‌ها
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === slideIndex) {
            dot.classList.add('active');
        }
    });
}

// نمایش اسلاید خاص با دات‌ها
function currentSlide(index) {
    slideIndex = index;
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;

    updateDots();
}

// Auto-slide every 3 seconds
setInterval(() => {
    moveSlide(1);
}, 3000);

window.onload = updateDots;
