$(document).ready(function() {
  // -- profile
  var profile_section_list = [
    [
      'assets/img/profile/name.svg',
      'name',
      'Abdelrahman Makhl'
    ],
    [
      'assets/img/profile/email.svg',
      'email',
      'ajmakhl@gmail.com'
    ],
    [
      'assets/img/profile/phone.svg',
      'phone',
      '602-394-8548'
    ],
    [
      'assets/img/profile/location.svg',
      'location',
      'Georgia, USA'
    ],
    [
      'assets/img/profile/website.svg',
      'website',
      'www.ajmakhl.me'
    ]
  ];
  function profile_fill(i) {
    var profile_section = $('.profile div:nth-of-type('+i+')');
    var profile_img = profile_section.find('img');
    var profile_p = profile_section.find('p');

    $(profile_img).attr('src', profile_section_list[i-1][0]);
    $(profile_img).attr('alt', profile_section_list[i-1][1]);
    $(profile_p).text(profile_section_list[i-1][2]);
  }
  for(i = 1; i < profile_section_list.length + 1; i++) {
    profile_fill(i);
  }
  // -- experience
  var experience_type_list = [
    [
      'Languages',
      ['HTML / CSS / JS', 200, 'this is just a test to see how the text will wrap on the next line'],
      ['React / React Native', 150,],
      ['Java', 100,]
    ],
    [
      'Software',
      ['Microsoft Office', 200,],
      ['Adobe CC', 180],
      ['Cinema 4D', 150],
      ['Affinity Designer', 200]
    ],
    [
      'Operating System',
      ['Mac X', 180],
      ['Windows 7, 8, 10', 200]
    ]
  ];
  // display experience_type_list[i][0]
  function experience_p_fill(i, j) {
    var experience_type = $('.experience_type:nth-of-type('+i+')');
    var experience_p = $(experience_type).find('#experience_text_header');
    $(experience_p).text(experience_type_list[j][0]);
  }
  for(i = 1; i < experience_type_list.length + 1; i++) {
    experience_p_fill(i, i-1);
  }
  // display experience_type_list[i][1...][0/1...]
  function experience_fill(string, value) {
    function fill(i, j, k) {
      var container = $('#'+string+'_container');
      var each = $(container).find('.experience_each:nth-of-type('+i+')');
      var each_p = $(each).find('#experience_text_title');
      var each_div = $(each).find('#experience_inner_section');
      $(each_p).text(experience_type_list[value][k][0]);
      $(each_div).width(experience_type_list[value][k][1]);
    }
    for(i = 1; i < experience_type_list[value].length; i++) {
      fill(i, 0, i);
    }
  }
  experience_fill('language', 0);
  experience_fill('software', 1);
  experience_fill('os', 2);

  function experience_detail(string, value) {
    function e_detail(i) {
      var container = $('#'+string+'_container');
      var experience_container = $(container).find('.experience_each:nth-of-type('+i+')');
      var experience_block = $(experience_container).find('.experience_block');
      $(experience_block).text(experience_type_list[value][i][2]);
    }
    for(i = 1; i < experience_type_list[value].length; i++) {
      e_detail(i);
    }
  }
  experience_detail('language', 0);
  experience_detail('software', 1);
  experience_detail('os', 2);
});
