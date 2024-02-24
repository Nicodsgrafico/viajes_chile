
// Nav cambia de color al scroll
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
    });