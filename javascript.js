$('.nav-item').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

$('.novosti_grids').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: '<div class="prev"><img src="./img/left.png"></div>',
  nextArrow: '<div class="next"><img src="./img/right.png"></div>',
  
});