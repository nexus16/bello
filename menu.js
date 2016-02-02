
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