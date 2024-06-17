$(document).ready(function(){
  $('.dropdown-trigger').dropdown();

  $('.carousel').carousel({
    fullWidth: true,
    noWrap: true,
    indicators: true,
    next: 3
  });
  
  setInterval(function(){
    $('.carousel').carousel('next');
  }, 2000);
  
  $('select').formSelect();
});
