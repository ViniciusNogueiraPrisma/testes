var swiper = new Swiper(".mySwiper-quotation", {
  slidesPerView: "auto",
  // spaceBetween: 24,

  pagination: {
    clickable: true,
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
