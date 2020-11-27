/////////// Menu Btn ///////////

var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');
var subMenuBtn = document.getElementById('sub-menu-btn');
var menuDrop = document.getElementById('sub-menu-drop');

menuBtn.addEventListener("click", function () {
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
    if (menuDrop.classList.contains('open')) {
        menuDrop.classList.toggle('open');
    }
});

subMenuBtn.addEventListener("click", function () {
    menuDrop.classList.toggle('open');
});


var inputs = document.querySelectorAll('.inputfile');
Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
        labelVal = label.innerHTML;

    function returnFileSize(number) {
        if (number < 1024) {
            return number + 'bytes';
        } else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + 'KB';
        } else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + 'MB';
        }
    }

    input.addEventListener('change', function (e) {
        var fileName = '';

        if(this.files[0].size > 37888 ) {
            alert("File is too big...! Maximum allowed size is 10MB");
            this.value = "";
        } else {
            fileName = e.target.value.split('\\').pop();
        }
        
        // if (this.files && this.files.length > 1) {
        //     fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        // } else {
        //     fileName = e.target.value.split('\\').pop();
        // }

        if (fileName) {
            label.querySelector('span').innerHTML = fileName + " (" + returnFileSize(this.files[0].size) + ")";
        } else {
            label.innerHTML = labelVal;
        }
    });
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