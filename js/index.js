$(document).ready(function(){
	$("#menu ul.sub").hide();
	$("#menu ul.click li").click(function(){
		$("ul",this).slideToggle("fast");
	});
});

/* 슬라이더 js로 바꿔 넣기 */
