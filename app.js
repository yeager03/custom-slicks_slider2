window.addEventListener("load", () => {
    const next = document.querySelector(".offer__slider-next"),
        prev = document.querySelector(".offer__slider-prev"),
        slides = document.querySelectorAll(".offer__slide"),
        total = document.querySelector("#total"),
        current = document.querySelector("#current");

    let index = 1;

    showSlides(index);

    slides.length < 10 ? total.textContent = `0${slides.length}` : total.textContent = slides.length;

    function showSlides(n) {
        if (n > slides.length) {
            index = 1;
        }

        if (n < 1) {
            index = slides.length;
        }
        slides.forEach(slide => slide.style.display = "none");

        slides[index - 1].style.display = "block";

        slides.length < 10 ? current.textContent = `0${index}` : current.textContent = index;

    }

    function plusSlides(n) {
        showSlides(index = index + n);
    }

    next.addEventListener("click", () => {
        plusSlides(1);
    });
    prev.addEventListener("click", () => {
        plusSlides(-1);
    });
});