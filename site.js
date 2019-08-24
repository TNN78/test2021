
$(window).scroll(function(){
  if ($(window).scrollTop() == 0) {
    $(".navbar").removeClass("fixed-top");
  } else {
    $(".navbar").addClass("fixed-top");
  }
});
