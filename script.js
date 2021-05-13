$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

if(wScroll > $('.all-logos').offset().top - ($(window).height() / 1.2)) {

  $('.logo').each(function(i){

    setTimeout(function(){
      $('.logo').eq(i).addClass('animate__fadeInLeft');
    }, (700 * (Math.exp(i * 0.14))) - 700);
  });

}
})
