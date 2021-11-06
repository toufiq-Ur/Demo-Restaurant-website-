$(document).ready(function () {
  $(".food-slider").slick({
    slidesToShow: 3,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    infinite: true,
    prevArrow: ".pre-btn",
    nextArrow: ".next-btn",
  });
});
