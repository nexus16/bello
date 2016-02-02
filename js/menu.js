
$(window).ready(function(){

});
$(window).resize(function(){

});

var nav = 0;
$('.hl-menu-toggle').on('click',function(){

   if(nav != 1)
   {
       $('.hl-menu').css({'display':'block'});
       $('body').css({'position':'fixed','padding-left':'250px'});
       nav = 1;
   }
    else
   {
       $('.hl-menu').css({'display':'none'});
       $('body').css({'position':'relative','padding-left':'0'});
       nav = 0;
   }
});
var nav1 = 0;
$('.hl-menu_item').on('click',function(){
    $(this).toggleClass('on');

});

$(function(){
   if(matchMedia)
   {
       var screen_phone = window.matchMedia("(max-width:720px)");
       screen_phone.addListener(WidthChange);
       WidthChange(screen_phone);
      function WidthChange(screen_phone)
      {
          if(screen_phone.matches)
          {
              var swiper2 = new Swiper('.hl-favorite .swiper-container1', {
                  autoplay: 5000,
                  autoplayDisableOnInteraction: false,
                  nextButton: '.hl-next1',
                  prevButton: '.hl-prev1',
                  slidesPerView: 1,

                  paginationClickable: true,
                  loop: true,
                  speed : 1000
              });
              var swiper3 = new Swiper('.hl-favorite .swiper-container2', {
                  autoplay: 5000,
                  autoplayDisableOnInteraction: false,
                  nextButton: '.hl-next2',
                  prevButton: '.hl-prev2',
                  slidesPerView: 1,

                  paginationClickable: true,
                  loop: true,
                  speed : 1000
              });
          }
      }
   }
});

$(function(){
    $('.hl-select_city_click').on('click',function(){
        $('.hl-list_city').slideToggle();
    });
    $('.hl-list_city>ul>li').on('click',function(){
       var city = $(this).html();
        $('.hl-select_city>span').html(city);
        $('.hl-list_city').css('display','none');
    });
});
