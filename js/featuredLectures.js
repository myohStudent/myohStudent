var cardGrid = document.getElementById('class-grid');

var classArr = [
  {
    "id": "0",
    "title": "하이든&메르의 디지털음악",
    "thumbnail": "./img/music.jpg"
  },
  {
    "id": "1",
    "title": "시앙의 디자인 강의",
    "thumbnail": "./img/design.jpg"
  },
  {
    "id": "2",
    "title": "자이로의 과학 강의",
    "thumbnail": "./img/zyro.jpg"
  },
  {
    "id": "3",
    "title": "하이든&메르의 디지털음악",
    "thumbnail": "./img/music.jpg"
  },
  {
    "id": "4",
    "title": "시앙의 디자인 강의",
    "thumbnail": "./img/design.jpg"
  },
  {
    "id": "5",
    "title": "자이로의 과학 강의",
    "thumbnail": "./img/zyro.jpg"
  },
  {
    "id": "6",
    "title": "하이든&메르의 디지털음악",
    "thumbnail": "./img/music.jpg"
  },
  {
    "id": "7",
    "title": "시앙의 디자인 강의",
    "thumbnail": "./img/design.jpg"
  },
  {
    "id": "8",
    "title": "자이로의 과학 강의",
    "thumbnail": "./img/zyro.jpg"
  }
]

function generateClassCard(classData) {
  /* <div class="card">
                  <img src="https://i.vimeocdn.com/video/726986673_390x220.webp" alt="Heart of soba" class="img-grid" style="font-size: 24px"/>
                   <i class="fas fa-trash"></i>
                  <div class="text">The Heart Of Soba</div>
              </div> */

  var card = document.createElement('div');
  card.className = "card";
  card.id = classData.id;
  console.log(card)
  card.onclick = function() {

   window.location= "./curriculum_pages/courseMath.html"; 
  /*window.location= ""'classData.title' + '.html'"";*/
  }

  var thumbnail = document.createElement('img');
  thumbnail.src = classData.thumbnail;
  thumbnail.alt = classData.title;
  thumbnail.className = "img-grid";

  var title = document.createElement('div');
  title.className = "text";
  title.innerHTML = classData.title;

  card.appendChild(thumbnail);
 
  card.appendChild(title);

  cardGrid.appendChild(card);
  return card;
}


for(var i=0 ; i<6 ; i++) {
  generateClassCard(classArr[i]);
}

$('.card').css('cursor', 'pointer');
/*
header and pulldown menu
*/
$(document).ready(function () {
  $('.your-class').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

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
// $(".wow").mouseout(function(){
  //     $(".wow").animate({opacity:'0'}, 500);
  //     setTimeout(function(){
  //       $(".wow").css('display', 'none');  
  //     },500);
  // });