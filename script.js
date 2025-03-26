// Scroll Fade-in Animation
document.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".scroll-fade");
    elements.forEach((el) => {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            el.classList.add("visible");
        }
    });
});

// Services Carousel Functionality
let index = 0;
const moveCarousel = (direction) => {
    const container = document.querySelector(".carousel-container");
    const items = document.querySelectorAll(".package-card").length;
    const itemWidth = document.querySelector(".package-card").offsetWidth;
    
    index += direction;
    if (index < 0) index = items - 1;
    if (index >= items) index = 0;
    
    container.style.transform = `translateX(-${index * itemWidth}px)`;
};

document.querySelector(".prev").addEventListener("click", () => moveCarousel(-1));
document.querySelector(".next").addEventListener("click", () => moveCarousel(1));
