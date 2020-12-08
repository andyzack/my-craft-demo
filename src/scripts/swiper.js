// import Swiper JS
import Swiper from 'swiper/bundle';

// import Swiper styles
import 'swiper/swiper-bundle.css';

/**
 * Swiper carousel from https://swiperjs.com/get-started/
 */
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});