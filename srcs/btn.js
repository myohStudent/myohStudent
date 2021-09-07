var hamnavi = document.querySelector(".ham-navi");
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", toggleMenu);
var e = document.getElementById('hamburger');
e.addEventListener('click', function() {
	if (this.className == 'on') this.classList.remove('on');
	else this.classList.add('on');
});