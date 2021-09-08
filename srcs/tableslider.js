jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#timetable-slider ul li').length;
      var slideWidth = $('#timetable-slider ul li').width();
      var slideHeight = $('#timetable-slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#timetable-slider').css({ width: slideWidth, height: slideHeight });
      
      $('#timetable-slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#timetable-lider ul li:last-child').prependTo('#timetable-slider ul');
  
      function moveLeft() {
          $('#timetable-slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#timetable-slider ul li:last-child').prependTo('#timetable-slider ul');
              $('#timetable-slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#timetable-slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#timetable-slider ul li:first-child').appendTo('#timetable-slider ul');
              $('#timetable-slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  