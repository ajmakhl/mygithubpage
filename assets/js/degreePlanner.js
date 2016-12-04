
$(document).ready (function (){
  // classes
  // GGC Core Curriculum Requirements
  // Req. High School Curriculum-RHSC (Formerly CPC)
  // fren1001
  var fren1001 = {
    classNum: "FREN 1001",
    className: "Elementary French I",
    classCreditNum: "3"
  };
  $('.fren1001 .classTakenX').hide();
  $('.fren1001 .classNum').text(fren1001.classNum);
  $('.fren1001 .className').text(fren1001.className);
  $('.fren1001 .classCreditTitle').text(fren1001.classCreditTitle);
  $('.fren1001 .classCreditNum').text(fren1001.classCreditNum);

  // AREA A - ESSENTIAL SKILLS
  // engl1101
  var engl1101 = {
    classNum: "ENGL 1101",
    className: "English Composition I",
    classCreditNum: "3"
  };
  // $('.engl1101 .classTakenX').hide();
  $('.engl1101 .classNum').text(engl1101.classNum);
  $('.engl1101 .className').text(engl1101.className);
  $('.engl1101 .classCreditTitle').text(engl1101.classCreditTitle);
  $('.engl1101 .classCreditNum').text(engl1101.classCreditNum);

  // engl1102
  var engl1102 = {
    classNum: "ENGL 1102",
    className: "English Composition II (transferred)",
    classCreditNum: "3"
  };
  // $('.engl1102 .classTakenX').hide();
  $('.engl1102 .classNum').text(engl1102.classNum);
  $('.engl1102 .className').text(engl1102.className);
  $('.engl1102 .classCreditTitle').text(engl1102.classCreditTitle);
  $('.engl1102 .classCreditNum').text(engl1102.classCreditNum);

  // math1113
  var math1113 = {
    classNum: "MATH 1113",
    className: "Precalculus",
    classCreditNum: "3 - 4"
  };
  // $('.math1113 .classTakenX').hide();
  $('.math1113 .classNum').text(math1113.classNum);
  $('.math1113 .className').text(math1113.className);
  $('.math1113 .classCreditTitle').text(math1113.classCreditTitle);
  $('.math1113 .classCreditNum').text(math1113.classCreditNum);

  // AREA B - INSTITUTIONAL OPTION
  // itech1001
  var itech1001 = {
    classNum: "ITEC 1001",
    className: "Intro to Computing",
    classCreditNum: "4"
  };
  // $('.itech1001 .classTakenX').hide();
  $('.itech1001 .classNum').text(itech1001.classNum);
  $('.itech1001 .className').text(itech1001.className);
  $('.itech1001 .classCreditTitle').text(itech1001.classCreditTitle);
  $('.itech1001 .classCreditNum').text(itech1001.classCreditNum);

  // AREA C - HUMANITIES/ARTS
  // musc1100
  var musc1100 = {
    classNum: "MUSC 1100",
    className: "Music Appreciation - INTL",
    classCreditNum: "3"
  };
  $('.musc1100 .classTakenX').hide();
  $('.musc1100 .classNum').text(musc1100.classNum);
  $('.musc1100 .className').text(musc1100.className);
  $('.musc1100 .classCreditTitle').text(musc1100.classCreditTitle);
  $('.musc1100 .classCreditNum').text(musc1100.classCreditNum);

  // reln1100
  var reln1100 = {
    classNum: "RELN 1100",
    className: "World Religions - INTL",
    classCreditNum: "3"
  };
  // $('.reln1100 .classTakenX').hide();
  $('.reln1100 .classNum').text(reln1100.classNum);
  $('.reln1100 .className').text(reln1100.className);
  $('.reln1100 .classCreditTitle').text(reln1100.classCreditTitle);
  $('.reln1100 .classCreditNum').text(reln1100.classCreditNum);

  // AREA D - NATURAL SCIENCE, MATH, TECHNOLOGY
  // chem1211K
  var chem1211K = {
    classNum: "CHEM 1211K",
    className: "Principles Chemistry I w/Lab",
    classCreditNum: "4"
  };
  $('.chem1211K .classTakenX').hide();
  $('.chem1211K .classNum').text(chem1211K.classNum);
  $('.chem1211K .className').text(chem1211K.className);
  $('.chem1211K .classCreditTitle').text(chem1211K.classCreditTitle);
  $('.chem1211K .classCreditNum').text(chem1211K.classCreditNum);

  // chem1212K
  var chem1212K = {
    classNum: "CHEM 1212K",
    className: "Principles Chemistry II w/Lab",
    classCreditNum: "4"
  };
  $('.chem1212K .classTakenX').hide();
  $('.chem1212K .classNum').text(chem1212K.classNum);
  $('.chem1212K .className').text(chem1212K.className);
  $('.chem1212K .classCreditTitle').text(chem1212K.classCreditTitle);
  $('.chem1212K .classCreditNum').text(chem1212K.classCreditNum);

  // itech2110
  var itech2110 = {
    classNum: "ITEC 2110",
    className: "Digital Media",
    classCreditNum: "4"
  };
  // $('.itech2110 .classTakenX').hide();
  $('.itech2110 .classNum').text(itech2110.classNum);
  $('.itech2110 .className').text(itech2110.className);
  $('.itech2110 .classCreditTitle').text(itech2110.classCreditTitle);
  $('.itech2110 .classCreditNum').text(itech2110.classCreditNum);

// AREA E - SOCIAL SCIENCE
// pols1101
var pols1101 = {
  classNum: "POLS 1101",
  className: "American Government",
  classCreditNum: "3"
};
$('.pols1101 .classTakenX').hide();
$('.pols1101 .classNum').text(pols1101.classNum);
$('.pols1101 .className').text(pols1101.className);
$('.pols1101 .classCreditTitle').text(pols1101.classCreditTitle);
$('.pols1101 .classCreditNum').text(pols1101.classCreditNum);

// hist1111
var hist1111 = {
  classNum: "HIST 1111",
  className: "Survey of World History I",
  classCreditNum: "3"
};
$('.hist1111 .classTakenX').hide();
$('.hist1111 .classNum').text(hist1111.classNum);
$('.hist1111 .className').text(hist1111.className);
$('.hist1111 .classCreditTitle').text(hist1111.classCreditTitle);
$('.hist1111 .classCreditNum').text(hist1111.classCreditNum);

// hist2111
var hist2111 = {
  classNum: "HIST 2111",
  className: "Survey of U.S. History I",
  classCreditNum: "3"
};
$('.hist2111 .classTakenX').hide();
$('.hist2111 .classNum').text(hist2111.classNum);
$('.hist2111 .className').text(hist2111.className);
$('.hist2111 .classCreditTitle').text(hist2111.classCreditTitle);
$('.hist2111 .classCreditNum').text(hist2111.classCreditNum);

// anth1102
var anth1102 = {
  classNum: "ANTH 1102",
  className: "Intro to Anthropology - INTL",
  classCreditNum: "3"
};
// $('.anth1102 .classTakenX').hide();
$('.anth1102 .classNum').text(anth1102.classNum);
$('.anth1102 .className').text(anth1102.className);
$('.anth1102 .classCreditTitle').text(anth1102.classCreditTitle);
$('.anth1102 .classCreditNum').text(anth1102.classCreditNum);

// AREA F - Courses Related to Info Tech Majors
// mgmt3000
var mgmt3000 = {
  classNum: "MGMT 3000",
  className: "Principles of Management",
  classCreditNum: "3"
};
$('.mgmt3000 .classTakenX').hide();
$('.mgmt3000 .classNum').text(mgmt3000.classNum);
$('.mgmt3000 .className').text(mgmt3000.className);
$('.mgmt3000 .classCreditTitle').text(mgmt3000.classCreditTitle);
$('.mgmt3000 .classCreditNum').text(mgmt3000.classCreditNum);

// itec2140
var itec2140 = {
  classNum: "ITEC 2140",
  className: "Programming Fundamentals",
  classCreditNum: "4"
};
// $('.itec2140 .classTakenX').hide();
$('.itec2140 .classNum').text(itec2140.classNum);
$('.itec2140 .className').text(itec2140.className);
$('.itec2140 .classCreditTitle').text(itec2140.classCreditTitle);
$('.itec2140 .classCreditNum').text(itec2140.classCreditNum);

// itec2201
var itec2201 = {
  classNum: "ITEC 2201",
  className: "Introduction to Info Systems",
  classCreditNum: "3"
};
// $('.itec2201 .classTakenX').hide();
$('.itec2201 .classNum').text(itec2201.classNum);
$('.itec2201 .className').text(itec2201.className);
$('.itec2201 .classCreditTitle').text(itec2201.classCreditTitle);
$('.itec2201 .classCreditNum').text(itec2201.classCreditNum);

// math2000
var math2000 = {
  classNum: "MATH 2000",
  className: "Statistics",
  classCreditNum: "3"
};
$('.math2000 .classTakenX').hide();
$('.math2000 .classNum').text(math2000.classNum);
$('.math2000 .className').text(math2000.className);
$('.math2000 .classCreditTitle').text(math2000.classCreditTitle);
$('.math2000 .classCreditNum').text(math2000.classCreditNum);

// math2300
var math2300 = {
  classNum: "MATH 2300",
  className: "Discrete Math",
  classCreditNum: "3"
};
// $('.math2300 .classTakenX').hide();
$('.math2300 .classNum').text(math2300.classNum);
$('.math2300 .className').text(math2300.className);
$('.math2300 .classCreditTitle').text(math2300.classCreditTitle);
$('.math2300 .classCreditNum').text(math2300.classCreditNum);

// GGC Physical Education
// phed1101
var phed1101 = {
  classNum: "PHED 1101",
  className: "Choices for Life",
  classCreditNum: "1"
};
// $('.phed1101 .classTakenX').hide();
$('.phed1101 .classNum').text(phed1101.classNum);
$('.phed1101 .className').text(phed1101.className);
$('.phed1101 .classCreditTitle').text(phed1101.classCreditTitle);
$('.phed1101 .classCreditNum').text(phed1101.classCreditNum);

// phed1010
var phed1010 = {
  classNum: "PHED 1010",
  className: "Introduction to Badminton",
  classCreditNum: "1"
};
// $('.phed1010 .classTakenX').hide();
$('.phed1010 .classNum').text(phed1010.classNum);
$('.phed1010 .className').text(phed1010.className);
$('.phed1010 .classCreditTitle').text(phed1010.classCreditTitle);
$('.phed1010 .classCreditNum').text(phed1010.classCreditNum);

// phed1060
var phed1060 = {
  classNum: "PHED 1060",
  className: "Weight Training",
  classCreditNum: "1"
};
$('.phed1060 .classTakenX').hide();
$('.phed1060 .classNum').text(phed1060.classNum);
$('.phed1060 .className').text(phed1060.className);
$('.phed1060 .classCreditTitle').text(phed1060.classCreditTitle);
$('.phed1060 .classCreditNum').text(phed1060.classCreditNum);

// Major in Info Tech - Software Develop Conc
// itec2150
var itec2150 = {
  classNum: "ITEC 2150",
  className: "Intermediate Programming",
  classCreditNum: "4"
};
// $('.itec2150 .classTakenX').hide();
$('.itec2150 .classNum').text(itec2150.classNum);
$('.itec2150 .className').text(itec2150.className);
$('.itec2150 .classCreditTitle').text(itec2150.classCreditTitle);
$('.itec2150 .classCreditNum').text(itec2150.classCreditNum);

// itec3100
var itec3100 = {
  classNum: "ITEC 3100",
  className: "Introduction to Networks",
  classCreditNum: "3"
};
$('.itec3100 .classTakenX').hide();
$('.itec3100 .classNum').text(itec3100.classNum);
$('.itec3100 .className').text(itec3100.className);
$('.itec3100 .classCreditTitle').text(itec3100.classCreditTitle);
$('.itec3100 .classCreditNum').text(itec3100.classCreditNum);

// itec3150
var itec3150 = {
  classNum: "ITEC 3150",
  className: "Advanced Programming",
  classCreditNum: "3"
};
$('.itec3150 .classTakenX').hide();
$('.itec3150 .classNum').text(itec3150.classNum);
$('.itec3150 .className').text(itec3150.className);
$('.itec3150 .classCreditTitle').text(itec3150.classCreditTitle);
$('.itec3150 .classCreditNum').text(itec3150.classCreditNum);

// itec3200
var itec3200 = {
  classNum: "ITEC 3200",
  className: "Intro to Databases",
  classCreditNum: "3"
};
$('.itec3200 .classTakenX').hide();
$('.itec3200 .classNum').text(itec3200.classNum);
$('.itec3200 .className').text(itec3200.className);
$('.itec3200 .classCreditTitle').text(itec3200.classCreditTitle);
$('.itec3200 .classCreditNum').text(itec3200.classCreditNum);

// itec3700
var itec3700 = {
  classNum: "ITEC 3700",
  className: "Systems Analysis and Design",
  classCreditNum: "3"
};
$('.itec3700 .classTakenX').hide();
$('.itec3700 .classNum').text(itec3700.classNum);
$('.itec3700 .className').text(itec3700.className);
$('.itec3700 .classCreditTitle').text(itec3700.classCreditTitle);
$('.itec3700 .classCreditNum').text(itec3700.classCreditNum);

// itec3860
var itec3860 = {
  classNum: "ITEC 3860",
  className: "Software Development I",
  classCreditNum: "4"
};
$('.itec3860 .classTakenX').hide();
$('.itec3860 .classNum').text(itec3860.classNum);
$('.itec3860 .className').text(itec3860.className);
$('.itec3860 .classCreditTitle').text(itec3860.classCreditTitle);
$('.itec3860 .classCreditNum').text(itec3860.classCreditNum);

// itec3870
var itec3870 = {
  classNum: "ITEC 3870",
  className: "Software Development II",
  classCreditNum: "4"
};
$('.itec3870 .classTakenX').hide();
$('.itec3870 .classNum').text(itec3870.classNum);
$('.itec3870 .className').text(itec3870.className);
$('.itec3870 .classCreditTitle').text(itec3870.classCreditTitle);
$('.itec3870 .classCreditNum').text(itec3870.classCreditNum);

// itec3900
var itec3900 = {
  classNum: "ITEC 3900",
  className: "Professional Practice & Ethics",
  classCreditNum: "3"
};
$('.itec3900 .classTakenX').hide();
$('.itec3900 .classNum').text(itec3900.classNum);
$('.itec3900 .className').text(itec3900.className);
$('.itec3900 .classCreditTitle').text(itec3900.classCreditTitle);
$('.itec3900 .classCreditNum').text(itec3900.classCreditNum);

// itec4260
var itec4260 = {
  classNum: "ITEC 4260",
  className: "Software Testing and QA",
  classCreditNum: "3"
};
$('.itec4260 .classTakenX').hide();
$('.itec4260 .classNum').text(itec4260.classNum);
$('.itec4260 .className').text(itec4260.className);
$('.itec4260 .classCreditTitle').text(itec4260.classCreditTitle);
$('.itec4260 .classCreditNum').text(itec4260.classCreditNum);

// itec4860
var itec4860 = {
  classNum: "ITEC 4860",
  className: "Software Development Project",
  classCreditNum: "3"
};
$('.itec4860 .classTakenX').hide();
$('.itec4860 .classNum').text(itec4860.classNum);
$('.itec4860 .className').text(itec4860.className);
$('.itec4860 .classCreditTitle').text(itec4860.classCreditTitle);
$('.itec4860 .classCreditNum').text(itec4860.classCreditNum);

// itec2130
var itec2130 = {
  classNum: "ITEC 2130",
  className: "Web Technologies",
  classCreditNum: "4"
};
$('.itec2130 .classTakenX').hide();
$('.itec2130 .classNum').text(itec2130.classNum);
$('.itec2130 .className').text(itec2130.className);
$('.itec2130 .classCreditTitle').text(itec2130.classCreditTitle);
$('.itec2130 .classCreditNum').text(itec2130.classCreditNum);

// itec4450
var itec4450 = {
  classNum: "ITEC 4450",
  className: "Web Development",
  classCreditNum: "4"
};
$('.itec4450 .classTakenX').hide();
$('.itec4450 .classNum').text(itec4450.classNum);
$('.itec4450 .className').text(itec4450.className);
$('.itec4450 .classCreditTitle').text(itec4450.classCreditTitle);
$('.itec4450 .classCreditNum').text(itec4450.classCreditNum);

// math2200
var math2200 = {
  classNum: "MATH 2200",
  className: "Calculus I",
  classCreditNum: "4"
};
$('.math2200 .classTakenX').hide();
$('.math2200 .classNum').text(math2200.classNum);
$('.math2200 .className').text(math2200.className);
$('.math2200 .classCreditTitle').text(math2200.classCreditTitle);
$('.math2200 .classCreditNum').text(math2200.classCreditNum);







  // info box
  var userInfo = {
    userId: "900092264",
    level: "Undergraduate Semester System",
    classification: "Freshman",
    mentor: "Price, Richard W",
    catalogYear: "2015-2016",
    school: "School of Science & Technology",
    degree: "Bachelor of Science",
    major: "Info Tech - Software Development",
    minor: "null",
    appliedForGraduation: "No",
    expectedGraduationDate: "null",
    institutionalHoursEarned: "12",
    institutionalGpa: "3.25",
    transferHoursEarned: "3",
    transferGpa: "3.00",
    overAllHoursEarned: "15",
    overAllGpa: "3.20",
    overallGPAregistrationHold:"null"
  };


  // show user info
  // hide the div
  $(".degreePlannerUserPersonalInfoContainer").hide();
  // function to display the div
  $('.degreePlannerGetForm button').click(function (){
    // variables
    input = $('.degreePlannerGetForm input').val();
    correctUserId = "";
    // if input is matched with correct ID
    if (input === userInfo.userId) {
    // if (input === correctUserId) {
      // slide toggle if true
      $(".degreePlannerUserPersonalInfoContainer").slideDown();
      $('#idDetail').text(userInfo.userId);
      $('#levelDetail').text(userInfo.level);
      $('#classificationDetail').text(userInfo.classification);
      $('#mentorDetail').text(userInfo.mentor);
      $('#catalogYearDetail').text(userInfo.catalogYear);
      $('#schoolDetail').text(userInfo.school);
      $('#degreeDetail').text(userInfo.degree);
      $('#majorDetail').text(userInfo.major);
      $('#minorDetail').text(userInfo.minor);
      $('#appliedforGraduationDetail').text(userInfo.appliedForGraduation);
      $('#expectedGraduationDateDetail').text(userInfo.expectedGraduationDate);
      $('#institutionalHoursEarnedDetail').text(userInfo.institutionalHoursEarned);
      $('#institutionalGpaDetail').text(userInfo.institutionalGpa);
      $('#transferHoursEarnedDetail').text(userInfo.transferHoursEarned);
      $('#transferGpaDetail').text(userInfo.transferGpa);
      $('#overallHoursEarnedDetail').text(userInfo.overAllHoursEarned);
      $('#overallGpaDetail').text(userInfo.overAllGpa);
      $('#registrationHoldDetail').text(userInfo.overallGPAregistrationHold);
    } else {
      // alert if wrong
      alert("Wrong User ID");
    }
  });
  // show user info box
  // hide the div
  $('.userInfoBox').hide();
  // function to display the div
  $('#userPicture').click(function (){
    // slide toggle
    $('.userInfoBox').slideToggle();

  });



  // show user content box
  //hide the div
  $('.userContentClassNeeded').hide();
  $('#classNeeded').click(function (){
    $('.userContentClassNeeded').slideToggle();
  });

});
