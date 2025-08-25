//get DOM elements
const gridButton = document.getElementById("footer__gridButton");
const swiperContainer = document.querySelector(".swiper.sliders");
const swiperWrapper = document.querySelector(".swiper-wrapper.sliders__wrapper");
const footerPagination = document.querySelector(".footer__pagination");
const slides = document.querySelectorAll(".sliders__slide");

//check if elements are exist
if(!gridButton || !swiperContainer || !swiperWrapper || !footerPagination || slides.length === 0) {
    console.error("Some elements are not exist in DOM");
} else {
    gridButton.addEventListener("click", () => {
        //add grid-mode for containers
        swiperContainer.classList.toggle("grid-mode");
        swiperWrapper.classList.toggle("grid-mode");
        footerPagination.classList.toggle("grid-mode");

        //add grid-mode for each slider
        slides.forEach(slide => {
            const slideMainText = slide.querySelector(".sliders__slider-textMain");
            const slideTitleText = slide.querySelector(".sliders__slider-textTitle");
            
            if (slideMainText) {
                slideMainText.classList.toggle("grid-mode");
            } else {
                console.warn("Element slideMainText doesn't found", slide);
            }
            if (slideTitleText) {             
                slideTitleText.classList.toggle("grid-mode");
            } else {
                console.warn("Element slideTitleText doesn't found", slide);
            }
        });

        //change aria-label "Grid view off" -> "Grid view on"
        const gridAria = gridButton.getAttribute("aria-label") === "Grid view on";
        if(gridAria) {
            gridButton.setAttribute("aria-label", "Grid view off");
        } else {
            gridButton.setAttribute("aria-label", "Grid view on");
        }

        //change text "Show in grid" -> "Show normal"
        const gridText = document.querySelector(".footer__gridButton-text");
        if(gridText.textContent === "Show in grid") {
            gridText.textContent = "Show normal";
        } else {
            gridText.textContent = "Show in grid";
        }
    });
}
