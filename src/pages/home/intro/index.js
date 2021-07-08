import Swiper, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
import "./index.sass";

Swiper.use([Navigation]);
const introSwiper = new Swiper(".intro__content", {
  direction: "horizontal",
  slidesPerView: 1,
  centeredSlides: true,
  slideToClickedSlide: true,
  loopAdditionalSlides: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
