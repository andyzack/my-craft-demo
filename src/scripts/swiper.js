// import Swiper JS
import Swiper from 'swiper/bundle';

// import Swiper styles
import 'swiper/swiper-bundle.css';

/**
 * Swiper carousel from https://swiperjs.com/get-started/
 */
var cardCarousel = new Swiper('.c-card-carousel', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

var heroSwiper = new Swiper('.c-hero-carousel', {
  slidesPerView: 1,
  spaceBetween: 0,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 0,
    }
  }
});

var listingSwiper = new Swiper('.c-listing-carousel', {
  slidesPerView: 1,
  spaceBetween: 0,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 5,
      spaceBetween: 0,
    }
  }
});