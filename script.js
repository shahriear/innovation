$('.counterUp').counterUp({
  delay: 10,
  time: 1000,
});

$('.service_body').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: false,
  prevArrow:
    '<button class="nextArr"><i class="fa-solid fa-arrow-right-long "></i></button>',
  nextArrow:
    '<button class="prevArr"><i class="fa-solid fa-arrow-left-long "></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  prevArrow: false,
  nextArrow: false,
});

// $('.slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
// })
