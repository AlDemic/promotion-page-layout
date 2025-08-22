const gridButton = document.getElementById("footer__gridButton");
const swiperContainer = document.querySelector(".swiper.sliders");
const swiperWrapper = document.querySelector(".swiper-wrapper.sliders__wrapper");
const footerPagination = document.querySelector(".footer__pagination");
const slides = document.querySelectorAll(".sliders__slide");

gridButton.addEventListener("click", () => {
    swiperContainer.classList.toggle("grid-mode");
    swiperWrapper.classList.toggle("grid-mode");
    footerPagination.classList.toggle("grid-mode");

    slides.forEach(slide => {
        const slideMainText = slide.querySelector(".sliders__slider-textMain");
        const slideTitleText = slide.querySelector(".sliders__slider-textTitle");
        
        if (slideMainText) slideMainText.classList.toggle("grid-mode");
        if (slideTitleText) slideTitleText.classList.toggle("grid-mode");
    });
});
