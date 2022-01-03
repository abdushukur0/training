$(document).ready(function () {
  $('.slider__content').slick({
    arrows: true,
    slidesToShow: 4,
    speed: 600,
    infinite: false,
    easing: 'ease',
    autoplay: false,
    touchThreshold: 20,
    swipeToSlide: true,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.8,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        }
      }]
  });
});
