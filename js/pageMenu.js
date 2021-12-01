/* 세부 페이지들 헤더의 팝업메뉴 버튼 기능입니다. */
$(".m1").hover(function () {
 	$(this).css('cursor', 'pointer');
    if($(".btn1-hover").css("display") == "none")
 	{
        $(".btn2-hover").css('display', 'none');
        $(".btn3-hover").css('display', 'none');
        $(".btn6-hover").css('display', 'none');
        $(".btn1-hover").animate({width: "toggle"}, 400, "linear");
        $(".btn1-hover").css('display', 'block');j
    };
});
$(".m2").hover(function () {
    $(this).css('cursor', 'pointer');

   if($(".btn2-hover").css("display") == "none")
    {
        $(".btn1-hover").css('display', 'none');
        $(".btn3-hover").css('display', 'none');
        $(".btn6-hover").css('display', 'none');
        $(".btn2-hover").animate({width: "toggle"}, 400, "linear");
        $(".btn2-hover").css('display', 'block');
   };
});
$(".m3").hover(function () {
    $(this).css('cursor', 'pointer');

   if($(".btn3-hover").css("display") == "none")
    {
        $(".btn1-hover").css('display', 'none');
        $(".btn2-hover").css('display', 'none');
        $(".btn6-hover").css('display', 'none');
        $(".btn3-hover").animate({width: "toggle"}, 400, "linear");
        $(".btn3-hover").css('display', 'block');
   };
});

$(".m7-my").hover(function () {
    $(this).css('cursor', 'pointer');

   if($(".btn6-hover").css("display") == "none")
    {
        $(".btn1-hover").css('display', 'none');
        $(".btn2-hover").css('display', 'none');
        $(".btn3-hover").css('display', 'none');
        $(".btn6-hover").animate({width: "toggle"}, 400, "linear");
        $(".btn6-hover").css('display', 'block');
   };
});
/* 서브메뉴 없애기 */
$('body').on('click', function(e){
	var $tgPoint = $(e.target);
	// var $popCallBtn = $tgPoint.hasClass('m1');
	var $popArea = $tgPoint.hasClass('.btn1-hover');
  
	if ( /*!$popCallBtn && */!$popArea ) {
        setTimeout(function(){
            $(".btn1-hover").css('display', 'none');
            $(".btn2-hover").css('display', 'none');
            $(".btn3-hover").css('display', 'none');
            $(".btn6-hover").css('display', 'none');
	    },400);
	}
});







// /*없애기*/
// $('body').on('click', function(e){
//    var $tgPoint = $(e.target);
//    var $popCallBtn = $tgPoint.hasClass('m2');
//    var $popArea = $tgPoint.hasClass('.btn2-hover');
 
//    if ( !$popCallBtn && !$popArea ) {
//        setTimeout(function(){
//         $(".btn2-hover").animate({width: "toggle"}, 400, "linear");
//         $(".btn2-hover").css('display', 'none');
//         //    $(".btn2-hover").slideRight("fast", function(){
//         //        $(".btn2-hover").css('display', 'none');
//         //    });
//        },400);
//    }
// });
//   $(".m2").hover(function () {
// 	$(this).css('cursor', 'pointer');
// 	if($(".hidden-sub-menu.m2-sub").css("display") == "none")
// 	{
// 	  $(".hidden-sub-menu.m2-sub").css('display', 'table-row');
// 	  $(".hidden-sub-menu.m2-sub").animate({opacity:'0.9'}, 500);
// 	}
//   });
//   $(".m3").hover(function () {
// 	$(this).css('cursor', 'pointer');
// 	if($(".hidden-sub-menu.m3-sub").css("display") == "none")
// 	{
// 	  $(".hidden-sub-menu.m3-sub").css('display', 'table-row');
// 	  $(".hidden-sub-menu.m3-sub").animate({opacity:'0.9'}, 500);
// 	}
//   });
//   $(".m7-my").hover(function () {
// 	$(this).css('cursor', 'pointer');
// 	if($(".hidden-sub-menu").css("display") == "none")
// 	{
// 	  $(".hidden-sub-menu").css('display', 'table-row');
// 	  $(".hidden-sub-menu").animate({opacity:'0.9'}, 500);
// 	}
//   });
