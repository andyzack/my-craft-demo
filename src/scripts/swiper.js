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

var heroSwiper = new Swiper('.hero-container', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});