$(document).ready(function(){

  // hide our element on page load


  $(".blurbSec").css('opacity', 0);

  $(".blurbSec").waypoint(function() {
      $(this.element).addClass('animated fadeIn');
      $(this.element)
  }, { offset: '100%' });


  $("#aboutMe .secondary").css('opacity', 0);

  $("#aboutMe .secondary").waypoint(function() {
      $("#aboutMe .secondary").addClass('animated fadeInRight');
  }, { offset: '100%' });


  $('#element-to-animate').css('opacity', 0);

  $('#element-to-animate').waypoint(function() {
      $('#element-to-animate').addClass('animated fadeInLeft');
  }, { offset: '85%' });

  $("#packages .secondary").css('opacity', 0);

  $("#packages .secondary").waypoint(function() {
      $("#packages .secondary").addClass('animated fadeInUp');
  }, { offset: '70%' });

  $("#services .col").css('opacity', 0);

  $("#services .col").waypoint(function() {
      $("#services .primary").addClass('animated fadeInLeft');
      $("#services .secondary").addClass('animated fadeInLeft');
      $("#services .tertiary").addClass('animated fadeInRight');
      $("#services .quarterly").addClass('animated fadeInRight');
  }, { offset: '85%' });
});
