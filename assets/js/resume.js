
$('.resBoxLg').hide();
$('.eduS').click(function(){
  $('.eduB').slideToggle();
  $(this).toggleClass('redBg');
  $(this).toggleClass('blueBg');
});

$('.techS').click(function(){
  $('.techB').slideToggle();
  $(this).toggleClass('redBg');
  $(this).toggleClass('blueBg');
});
