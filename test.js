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