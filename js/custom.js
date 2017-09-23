$('.slider-expert').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.list-customers').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.nav-slider .nav-prev').click(function(){
  $('.slider-expert').slick('slickPrev');
});

$('.nav-slider .nav-next').click(function(){
  $('.slider-expert').slick('slickNext');
});
var LP=new function __LP(){
    this.init=function(){
        $(window).scroll(function(){
            fixHeader();
            
        });
        fixHeader();   
        $(".menus .item").click(function(){
            $(this).toggleClass("active");
        });
    };
    
    function fixHeader(){
        var top=$(window).scrollTop();
        
        if (top>60){
            if (!$(".header").hasClass("scrolled")){
                $(".header").addClass("scrolled");
            }
        }else{
            $(".header").removeClass("scrolled");
        }
    }
    this.expandMenu=function(a,b){
        if(a=="open"){
            $(b).toggleClass("active");
            $(".header .box-menus").toggleClass("show");
            $(".common-overlay").toggleClass("show");
        }else{
            $(b).toggleClass("active");
            $(".header .box-menus").toggleClass("show");
            $(".common-overlay").toggleClass("show");
        }
    }
};


(function($) {
    "use strict";
    LP.init();
})(jQuery);