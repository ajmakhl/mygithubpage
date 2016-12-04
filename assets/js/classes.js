// function if else to toggle text
jQuery.fn.extend({
  toggleText: function (a, b) {
    var that = this;
    if (that.text() !== a && that.text() !== b) {
      that.text(a);
    } else if (that.text() === a) {
      that.text(b);
    } else if (that.text() === b) {
      that.text(a);
    }
    return this.show(3002);
  }});
  // hide info
$('.displayInfo').hide();
// document ready
$(document).ready(function() {
  // function to toggle text
  $('.openDiv').click(function() {
    $(this).siblings('.displayInfo').slideToggle();
    $(this).toggleText('+', '-');
  });



});
