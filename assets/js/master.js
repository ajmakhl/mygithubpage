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
      ['HTML / CSS / JS', '90%', 'Expert in creatively creating web pages with clean responsive UI'],
      ['React / React Native', '60%', 'Ability to read and write with prebuilt code'],
      ['Java', '50%', 'Understand the basics and how to break code into reusable methods']
    ],
    [
      'Software',
      ['Microsoft Office', '90%', 'Ability to use Word, Excel, and PowerPoint'],
      ['Adobe CC', '70%', 'Great capability of working with Photoshop, After Effects, Premiere'],
      ['Cinema 4D', '60%', 'Create models and animation'],
      ['Affinity Designer', '90%', 'Creatively design clean vectorized graphics']
    ],
    [
      'Operating System',
      ['Mac X', '80%', 'Ability to maneuver and set up a clean and easy to use environment'],
      ['Windows 7, 8, 10', '90%', 'Have 8 years of windows experience']
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
      $(each_div).css('width', experience_type_list[value][k][1]);
    }
    for(i = 1; i < experience_type_list[value].length; i++) {
      fill(i, 0, i);
    }
  }
  experience_fill('language', 0);
  experience_fill('software', 1);
  experience_fill('os', 2);

  // function to display descriptions
  // function experience_detail(string, value) {
  //   function e_detail(i) {
  //     var container = $('#'+string+'_container');
  //     var experience_container = $(container).find('.experience_each:nth-of-type('+i+')');
  //     var experience_block = $(experience_container).find('.experience_block');
  //     $(experience_block).text(experience_type_list[value][i][2]);
  //   }
  //   for(i = 1; i < experience_type_list[value].length; i++) {
  //     e_detail(i);
  //   }
  // }
  // experience_detail('language', 0);
  // experience_detail('software', 1);
  // experience_detail('os', 2);

  // right resume
  var employment_section = [
    [
      'A/V Assistant',
      'Georgia Gwinnett College — January 2014 - May 2014',
      [
        'Provide Positive instructional technology assistance to students, faculty, and staff members',
        'Maintain and troubleshoot Audio and Visual',
        'Analyze and Record device status on campus'
      ]
    ],
    [
      'Computer Lab Assistant',
      'Georgia Perimeter College — November 2011 - November 2013',
      [
        'Deliver positive assistance to students, faculty, and staff in a computer lab',
        'Provide positive customer support and handle a multi-line phone system',
        'Maintain labs around the campus to keep devices unto date'
      ]
    ]
  ];
  var education_section = [
    [
      'Software Development',
      'Georgia Gwinnett College — January 2014 - Present',
      [
        'A concentration in the full range of information technology professions'
      ]
    ]
  ];
  // titles and subs
  function right_box_text_all(id, section) {
    function right_box_text_fill(i) {
      var container = $('#'+id+'_box');
      var sub_container = container.find($('.resume_right_small_box:nth-of-type('+i+')'));
      var title = sub_container.find('#small_box_title');
      var sub_title = sub_container.find('#small_box_sub');
      title.text(section[i-1][0]);
      sub_title.text(section[i-1][1]);
    }
    for(i = 1; i < section.length + 1; i++) {
      right_box_text_fill(i);
    }
  }
  right_box_text_all('employment', employment_section);
  right_box_text_all('education', education_section);
  // list
  function right_box_list_all(id, section) {
  function right_box_list_fill(i, j) {
    var container = $('#'+id+'_box');
    var sub_container = container.find($('.resume_right_small_box:nth-of-type('+(i+1)+')'));
    var list = sub_container.find('.small_box_list').find('li:nth-of-type('+(j+1)+')');
    list.text(section[i][2][j]);
  }
  for(i = 0; i < section.length; i++) {
    for(j = 0; j < section[i][2].length;  j++) {
      right_box_list_fill(i, j);
    }
  }
}
right_box_list_all('employment', employment_section);
right_box_list_all('education', education_section);

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
  })).appendTo('.gallery_wrapper');
}
});
