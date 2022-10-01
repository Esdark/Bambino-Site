// Mobile Menu

$(document).ready(function ($) {

    $(".close-menu").click(function () {
      $('.header-menu').collapse('show');
    });
    $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
    });
    
  });