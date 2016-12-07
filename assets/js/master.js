$(document).ready(function() {
  // navbar
  $('#myNavBtn').click(function() {
    $('.myNavBar').toggleClass('navToggle');
    $('#myNavBtn').toggleClass('navToggle');
  });
  //gallery
  var image_list_count = 23;
  var my_small_gallery = [];
  for(i = 0; i < image_list_count; i++) {
    my_small_gallery[i] = 'https://raw.githubusercontent.com/ajmakhl/Images/master/small/'+i+'.jpg';
  }
  var my_large_gallery = [];
  for(i = 0; i < image_list_count; i++) {
    my_large_gallery[i] = 'https://raw.githubusercontent.com/ajmakhl/Images/master/large/'+i+'.jpg';
  }

  for(i = 0; i < image_list_count; i++) {
    $('<a />', {
      'href': my_large_gallery[i],
      'data-lightbox': 'roadtrip'
    }).append($('<img />', {
      'id': 'img_' + i,
      'src': my_small_gallery[i],
      'alt': 'img_' + i
    })).appendTo('.myGallery');
  }

  //Languages
  var lang_val = [200, 200, 180, 80, 50];
  for(i = 0; i < lang_val.length; i++) {
    $('#lang_'+i).width(lang_val[i]);
    // ifColor('#lang_');
  }
  // Software
  var soft_val = [200, 150, 150, 200];
  for(i = 0; i < soft_val.length; i++) {
    $('#soft_'+i).width(soft_val[i]);
    // ifColor('#soft_');
  }
  // Operating System
  var os_val = [200, 180];
  for(i = 0; i < os_val.length; i++) {
    $('#os_'+i).width(os_val[i]);
    // ifColor('#os_');
  }
});
