const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.next-slide',
        prevEl: '.prev-slide',
    },
    slidesPerView: 1,
    spaceBetween: 30,
});