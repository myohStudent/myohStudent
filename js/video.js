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

    alert('Card Clicked for => ' + classData.title);
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


for(var i=0; i<classArr.length; i++) {
  generateClassCard(classArr[i]);
}