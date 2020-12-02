var navi = document.querySelector(".navi");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", function(){
    navi.classList.add("navi-visible");
    navi.classList.remove("navi-invisible");
});

closeBtn.addEventListener("click", function(){
    navi.classList.add("navi-invisible");
    navi.classList.remove("navi-visible");
});


