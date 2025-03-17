var swiper = new Swiper(".dishes", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
var swiper = new Swiper(".testimonial", {
  speed: 600,
  spaceBetween: 30,
  loop: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

// tabs area
$(function () {
  $("#tabs").tabs();
});
