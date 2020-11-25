var headerBtn =  document.querySelector("#headerBtn");
var startP = document.querySelector("#headerWrap");

headerBtn.addEventListener('click', function(){
  headerBtn.classList.remove("header-btn-disappear");
  headerBtn.classList.add("header-btn-appear");
  startP.classList.remove("header-wrap");
  startP.classList.add("start-circle");
});

var goBtn = document.querySelector("#goBtn");

goBtn.addEventListener('click', function(){
  headerBtn.classList.remove("header-btn-appear");
  headerBtn.classList.add("header-btn-disappear");
  startP.classList.remove("start-circle");
  startP.classList.add("header-wrap");
});

var footerBtn = document.querySelector("footer");
var footerWrap = document.querySelector(".footer-wrap");
var onoff=1;

window.addEventListener('resize', function(){
  if(onoff=== 0) {
    footerBtn.style.bottom= "-" +footerWrap.clientHeight+"px";
  }
});

footerBtn.addEventListener('click', function(){
  if(onoff===1){
    footerBtn.style.bottom= "-" +footerWrap.clientHeight+"px";
    onoff=0;
  }
  else{
    footerBtn.style.bottom= "0";
    onoff=1;
  }
});