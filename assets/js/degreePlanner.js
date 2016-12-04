$(document).ready (function (){
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
    var input = $('.degreePlannerGetForm input').val();
    // if input is matched with correct ID
    if (input !== userInfo.userId) {
      $(".degreePlannerUserPersonalInfoContainer").slideDown();
    } else {
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
    }
  });
  // classes
  function myClass(classVar, classNum, className, classCredit, boolean) {
    myClassVar = {
      classClass: classVar,
      classNum: classNum,
      className: className,
      classCreditNum: classCredit
    };
    if(boolean === true) {
      $('.'+classVar+' .classTakenX').show();
    } else {
      $('.'+classVar+' .classTakenX').hide();
    }
    $('.'+classVar+' .classNum').text(myClassVar.classNum);
    $('.'+classVar+' .className').text(myClassVar.className);
    $('.'+classVar+' .classCreditTitle').text(myClassVar.classCreditTitle);
    $('.'+classVar+' .classCreditNum').text(myClassVar.classCreditNum);
  }
  var myClassList = [
    // GGC Core Curriculum Requirements
    // Req. High School Curriculum-RHSC (Formerly CPC)
    ['fren1001', 'FREN 1001', 'Elementary French I', 3, false],
    // AREA A - ESSENTIAL SKILLS
    ['engl1101','ENGL 1101', 'English Composition I', 3, true],
    ['engl1102','ENGL 1102', 'English Composition II (transferred)', 3, true],
    ['math1113','MATH 1113', 'Precalculus', 4, false],
    // AREA B - INSTITUTIONAL OPTION
    ['itech1001','ITEC 1001', 'Intro to Computing', 4, true],
    // AREA C - HUMANITIES/ARTS
    ['musc1100','MUSC 1100', 'Music Appreciation - INTL', 3, false],
    ['reln1100','RELN 1100', 'World Religions - INTL', 3, true],
    // AREA D - NATURAL SCIENCE, MATH, TECHNOLOGY
    ['chem1211K','CHEM 1211K', 'Principles Chemistry I w/Lab', 4, false],
    ['chem1212K','CHEM 1212K', 'Principles Chemistry II w/Lab', 4, false],
    ['itech2110','ITEC 2110', 'Digital Media', 4, true],
    // AREA E - SOCIAL SCIENCE
    ['pols1101','POLS 1101', 'American Government', 3, false],
    ['hist1111','HIST 1111', 'Survey of World History I', 3, false],
    ['hist2111','HIST 2111', 'Survey of U.S. History I', 3, false],
    ['anth1102','ANTH 1102', 'Intro to Anthropology - INTL', 3, true],
    // AREA F - Courses Related to Info Tech Majors
    ['mgmt3000','MGMT 3000', 'Principles of Management', 3, false],
    ['itec2140','ITEC 2140', 'Programming Fundamentals', 4, true],
    ['itec2201','ITEC 2201', 'Introduction to Info Systems', 3, true],
    ['math2000','MATH 2000', 'Statistics', 3, false],
    ['math2300','MATH 2300', 'Discrete Math', 3, true],
    // GGC Physical Education
    ['phed1101','PHED 1101', 'Choices for Life', 1, true],
    ['phed1010','PHED 1010', 'Introduction to Badminton', 1, true],
    ['phed1060','PHED 1060', 'Weight Training', 1, false],
    // Major in Info Tech - Software Develop Conc
    ['itec2150','ITEC 2150', 'Intermediate Programming', 4, true],
    ['itec3100','ITEC 3100', 'Introduction to Networks', 3, false],
    ['itec3150','ITEC 3150', 'Advanced Programming', 3, false],
    ['itec3200','ITEC 3200', 'Intro to Databases', 3, false],
    ['itec3700','ITEC 3700', 'Systems Analysis and Design', 3, false],
    ['itec3860','ITEC 3860', 'Software Development I', 4, false],
    ['itec3870','ITEC 3870', 'Software Development II', 4, false],
    ['itec3900','TEC 3900', 'Professional Practice & Ethics', 3, false],
    ['itec4260','ITEC 4260', 'Software Testing and QA', 3, false],
    ['itec4860','ITEC 4860', 'Software Development Project', 3, false],
    ['itec2130','ITEC 2130', 'Web Technologies', 4, false],
    ['itec4450','ITEC 4450', 'Web Development', 4, false],
    ['math2200','MATH 2200', 'Calculus I', 4, false]
  ];
  for(i = 0; i < myClassList.length; i++) {
    myClass(myClassList[i][0], myClassList[i][1], myClassList[i][2], myClassList[i][3], myClassList[i][4]);
  }
  // count number of class credits
var classCount = 0;
for(i = 0; i < myClassList.length; i++) {
  classCount += myClassList[i][3];
}

console.log(classCount);
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
