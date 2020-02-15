/////////// Menu Btn ///////////

var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');
var subMenuBtn = document.getElementById('sub-menu-btn');
var menuDrop = document.getElementById('sub-menu-drop');

menuBtn.addEventListener("click", function(){
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
    if(menuDrop.classList.contains('open')){
       menuDrop.classList.toggle('open');
       }
});

subMenuBtn.addEventListener("click", function(){
    menuDrop.classList.toggle('open');
});




/*
var subMenuBtns = document.getElementsByClassName("sub-menu-btn");
var menuDrop;
var i;

for (i = 0; i < subMenuBtns.length; i++) {
    subMenuBtns[i].addEventListener("click", function(){
        this.parentElement.getElementsByTagName("div")[0].classList.toggle('open');
    });
}
*/
