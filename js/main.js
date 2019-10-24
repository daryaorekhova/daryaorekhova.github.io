$(document).ready(function(){

  $('.reviews-slider').slick({
  	infinite: true,
  	slidesToShow: 2,
  	slidesToScroll: 2,
  	arrow: true,
  	prevArrow: '<i class="fa fa-chevron-left arrow-left reviews-slider-arrows"></i>',
  	nextArrow: '<i class="fa fa-chevron-right arrow-right reviews-slider-arrows"></i>',
  	dots: true,
    responsive: [
            {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 1
                    }
                }
    ]
  });

  // Process Modal
  $('.process-popup1').click(function(){
   		$('#process-modal1').arcticmodal();
   }) 
   $('.process-popup2').click(function(){
   		$('#process-modal2').arcticmodal();
   })
   $('.process-popup3').click(function(){
   		$('#process-modal3').arcticmodal();
   })
   $('.process-popup4').click(function(){
   		$('#process-modal4').arcticmodal();
   })  

   // Works Modal
   $('.work-popup1').click(function(){
      $('#work-modal1').arcticmodal();
   }) 
   $('.work-popup2').click(function(){
      $('#work-modal2').arcticmodal();
   })
   $('.work-popup3').click(function(){
      $('#work-modal3').arcticmodal();
   })
   $('.work-popup4').click(function(){
      $('#work-modal4').arcticmodal();
   })  
   $('.work-popup5').click(function(){
      $('#work-modal5').arcticmodal();
   }) 
   $('.work-popup6').click(function(){
      $('#work-modal6').arcticmodal();
   })
   $('.work-popup7').click(function(){
      $('#work-modal7').arcticmodal();
   })
   $('.work-popup8').click(function(){
      $('#work-modal8').arcticmodal();
   })
   $('.work-popup9').click(function(){
      $('#work-modal9').arcticmodal();
   }) 

   // Services Modals
   $('.services-popup1').click(function(){
      $('#services-modal1').arcticmodal();
   }) 
   $('.services-popup2').click(function(){
      $('#services-modal2').arcticmodal();
   })
   $('.services-popup3').click(function(){
      $('#services-modal3').arcticmodal();
   })
   $('.services-popup4').click(function(){
      $('#services-modal4').arcticmodal();
   })  

  new WOW().init(); 


});
