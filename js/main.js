$(".galeria .slide-prev").click(function(){
    prevSlide();
   });
  
   $(".galeria .slide-next").click(function(){
    nextSlide();
   });
  
  function nextSlide(){
   var size = $(".slide-single").width();
   var fim = ($(".slide-single").length - 3) * size;
   var positionAtual = $(".slide-container").scrollLeft();
    
    if(positionAtual < fim - size){
      $(".slide-container").animate({scrollLeft: positionAtual + size});
    }else{
      $(".slide-container").animate({scrollLeft: 0});
   }
  }
  
  function prevSlide(){
   var size = $(".slide-single").width();
   var fim = ($(".slide-single").length - 3) * size;
   var positionAtual = $(".slide-container").scrollLeft();
    
    if(positionAtual - size >= 0){
      $(".slide-container").animate({scrollLeft: positionAtual - size});
    }else{
      $(".slide-container").animate({scrollLeft: fim});   
    }
  }