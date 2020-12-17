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





var a, j, k, index;

var customsel = document.getElementById("custom-select");
var selElmnt = customsel.getElementsByTagName("select")[0];
var selLength = selElmnt.length;
var form = document.getElementById("form");

//create a custom select
a = document.createElement("DIV");
a.setAttribute("class", "select-selected");
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
customsel.appendChild(a);

//create a custom options list
var b = document.createElement("DIV");
b.setAttribute("class", "custom-opt-lst");

for(j = 1; j < selLength; j++) {
    var c = document.createElement("DIV");
    c.setAttribute("class", "custom-option");
    c.innerHTML = selElmnt.options[j].innerHTML;
    
    c.addEventListener("click", function(e){
        form.classList.remove("non-nurse");
        for(k = 0; k < selLength; k++) {
            if (selElmnt.options[k].innerHTML == this.innerHTML ) {
                var originalOpt = selElmnt.options[k];
                a.innerHTML = selElmnt.options[k].innerHTML;
                index = k;
            }
        } 
        if (index == 3) {
            form.classList.add("non-nurse");
        }
        selElmnt.selectedIndex = index;
    });
    
    b.appendChild(c);
}
customsel.appendChild(b);

function dropdown() {
    customsel.classList.toggle("open");
}

customsel.addEventListener("click", dropdown);


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