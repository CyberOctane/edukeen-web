var lastScrollTop = 0;

var def_options = {
    delay: 250,
    reset: true,
    distance: '50px'
};

ScrollReveal().reveal('.wow', def_options);

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st < lastScrollTop){
      // downscroll code
      ScrollReveal().reveal('.wow', def_options);
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
