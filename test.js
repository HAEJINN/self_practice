var homeBtn = document.getElementById("headerbutton");
var circle =  document.getElementById("headerwrap");
var goBtn = document.getElementById("go-btn")


homeBtn.addEventListener('click',function(){
  //test.classList.remove("header-btn");
  homeBtn.style.display= "none";
  circle.style.display= "flex";
});

goBtn.addEventListener('click', function(){
  homeBtn.style.display= "flex";
  circle.style.display= "none";
});