var e = document.getElementById('hamburger');
e.addEventListener('click', function() {
	if (this.className == 'on') this.classList.remove('on');
	else this.classList.add('on');
});