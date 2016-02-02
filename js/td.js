$(document).ready(function() {
    var n=0;
    $('.td-sortby-1').on('click' , function(){
        $('.td-list-1').slideToggle(1000);
    });
    $('.td-sortby-2').on('click' , function(){
        $('.td-list-2').slideToggle(1000);
    });
    $('.td-list-hover li').on('click' , function(){
        window.location.reload();
    });
});/**
 * Created by lynk on 03-Jan-16.
 */
$(document).ready(function() {
    var n=0;
    $('p').on('click' , function(){
        if (n==0) {
            $(this).addClass('td-p-hover');
            n=1;
        }
        else{
            $(this).removeClass('td-p-hover');
            n=0;
        };
    });
});
$(document).ready(function() {
    var n=0;
    $('.td-color li').on('click' , function(){
        if (n==0) {
            $(this).addClass('td-color-chosen-hover');
            n=1;
        }
        else{
            $(this).removeClass('td-color-chosen-hover');
            n=0;
        };
    });
    $('.td-kieu-mat li').on('click' , function(){
        if (n==0) {
            $(this).addClass('td-kieu-mat-hover');
            n=1;
        }
        else{
            $(this).removeClass('td-kieu-mat-hover');
            n=0;
        };
    });
    $('.td-thiet-ke li').on('click' , function(){
        if (n==0) {
            $(this).addClass('td-thiet-ke-hover');
            n=1;
        }
        else{
            $(this).removeClass('td-thiet-ke-hover');
            n=0;
        };
    });
});
$(document).ready(function() {
    var n=0;
    $('.td-form-icon-1').on('click' , function(){
        $('.td-chosen').slideToggle(1200);
    });
});
$('.td-glasses-product-color>li').bind('click mouseenter mouseleave',function(){
    var val_connect = $(this).data('connect');
    var num_slide = $(this).data('slide');
    $('.td-glasses-product-color>li['+'data-connect='+val_connect+']').removeClass('td-glasses-product-actived');
    $(this).addClass('td-glasses-product-actived');
    $('.td-product li[data-product='+val_connect+'] .td-glasses-product-img').removeClass('td-img-actived');
    $('.td-product li[data-product='+val_connect+'] .'+num_slide+'').addClass('td-img-actived');
});
$(document).ready(function() {
    var n=0;
    $('.td-sortby-1').on('click' , function(){
        $('.td-list-1').slideToggle(1000);
    });
    $('.td-sortby-2').on('click' , function(){
        $('.td-list-2').slideToggle(1000);
    });
    $('.td-list-hover li').on('click' , function(){
        window.location.reload();
    });
});
$(document).ready(function() {
    var n=0;
    $('p').on('click' , function(){
        if (n==0) {
            $(this).addClass('td-p-hover');
            n=1;
        }
        else{
            $(this).removeClass('td-p-hover');
            n=0;
        };
    });
});
$(document).ready(function() {
    var n=0;
    $('.td-form-icon-1').on('click' , function(){
        $('.td-chosen').slideToggle(1200);
    });
});
