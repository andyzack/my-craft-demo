// import Swiper JS
import Swiper from 'swiper/bundle';

// import Swiper styles
import 'swiper/swiper-bundle.css';

import Blazy from 'blazy';

// Initialize
var bLazy = new Blazy({ 
  success: function(ele){
      // Image has loaded
  }
, error: function(ele, msg){
      if(msg === 'missing'){
          // Data-src is missing
      }
      else if(msg === 'invalid'){
          // Data-src is invalid
      }  
  }
});

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
  slidesPerView: 3,
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

heroSwiper.on('slideChange', () => {
  bLazy.revalidate();
});

listingSwiper.on('slideChange', () => {
  bLazy.revalidate();
});

cardCarousel.on('slideChange', () => {
  bLazy.revalidate();
});