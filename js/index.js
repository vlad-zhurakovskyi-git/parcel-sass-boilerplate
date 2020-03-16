 // js
import $ from 'jquery';
import 'slick-carousel/slick/slick';

 $('.references-slider').slick({
     slidesToShow: 3,
     slidesToScroll: 3,
     dots: true,
     arrows: false,
 });


 $('.price-slider').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     dots: true,
     arrows: false,
 });

 $(window).scroll(function (){
     $(' .hiw-content__snake').each(function (){
         var imagePos = $(this).offset().top;
         var topOfWindow = $(window).scrollTop();
         if (imagePos < topOfWindow+710) {
             $(this).addClass('hiw-content__snake_animate');
         }
     });
 });


 // css
import 'normalize.css';
import './../css/main.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';