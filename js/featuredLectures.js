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
    "title": "아토샘과 함께하는 엔트리 수업",
    "thumbnail": "./img/atto.jpg"
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

/* main page의 사진 슬라이더 */
// $('.your-class').css("visibility", "visible");
// $('.your-class img').css("display", "block");
$(document).ready(function () {

  $('.slick-init').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: false,
	});
  $('.your-class').attr("class","slick-init");
	$('.slick-init').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});
});
