$(document).ready(function() {
  $('#topslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  });
});

$(window).on("scroll", function() {
  if($(window).scrollTop() > 200) {
    $("#header").addClass("activeHeader");
  } else {  $("#header").removeClass("activeHeader");
  }
});