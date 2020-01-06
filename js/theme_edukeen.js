/////////// Menu Btn ///////////

var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');

menuBtn.addEventListener("click", menuControl);

function menuControl() {
    menu.classList.toggle('open');
}