import { gsap } from "gsap";

var tl = gsap.timeline({defaults:{opacity:0, ease:"back"}});
    tl.from(".logo", {ease: "linear", autoAlpha: 0})
      .from(".c-header__logo g > .letter", {scale:0, transformOrigin: "50% 50%", stagger: 0.1})
      .from(".swiper-slide strong", {y: 86, duration: 1}, "-=0.6")
      .from(".swiper-slide em", {x: -86, duration: 0.5, stagger: 0.5}, "-=0.2")