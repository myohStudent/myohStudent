
/*
header and pulldown menu
*/

$(".m1").hover(function () {
	$(this).css('cursor', 'pointer');
	if($(".wow").css("display") == "none")
	{
	  $(".wow").css('display', 'block');
	  $(".wow").animate({opacity:'0.9'}, 500);
	}
  });
  $(".m2").hover(function () {
	$(this).css('cursor', 'pointer');
	if($(".wow").css("display") == "none")
	{
	  $(".wow").css('display', 'block');
	  $(".wow").animate({opacity:'0.9'}, 500);
	}
  });
  $(".m3").hover(function () {
	$(this).css('cursor', 'pointer');
	if($(".wow").css("display") == "none")
	{
	  $(".wow").css('display', 'block');
	  $(".wow").animate({opacity:'0.9'}, 500);
	}
  });
  $(".m7-my").hover(function () {
	$(this).css('cursor', 'pointer');
	if($(".wow").css("display") == "none")
	{
	  $(".wow").css('display', 'block');
	  $(".wow").animate({opacity:'0.9'}, 500);
	}
  });
  /* 타깃영역 제외한 부분 누르면 wow 없애기 */
  $('body').on('click', function(e){
	var $tgPoint = $(e.target);
	var $popCallBtn = $tgPoint.hasClass('nav-table');
	var $popArea = $tgPoint.hasClass('wow');
  
	if ( !$popCallBtn && !$popArea ) {
	  $(".wow").animate({opacity:'0'}, 500);
	  setTimeout(function(){
	  $(".wow").css('display', 'none');  
	  },500);
	}
  });