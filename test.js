var homeBtn = document.getElementById("headerbutton");
var circle =  document.getElementById("headerwrap");
var goBtn = document.getElementById("go-btn");


homeBtn.addEventListener('click',function(){
  //test.classList.remove("header-btn");
  homeBtn.style.display= "none";
  circle.style.display= "flex";
});

goBtn.addEventListener('click', function(){
  homeBtn.style.display= "flex";
  circle.style.display= "none";
});

var footBtn = document.getElementById("footerbtn");
var footerWrap = document.getElementById("footerwrap");
var footer = document.querySelector("footer");
var onoff = 1;

if(screen.width>=960){
  footBtn.addEventListener('click', function(){
    if(onoff==1){
      footer.style.position= "fixed";
      footer.style.bottom= "0";
      footer.style.height= "0";
      // footer.style.left= "50%";
      // footer.style.transform= "translateX(-2em)";
      // footerWrap.style.position= "absolute";
      // footerWrap.style.bottom= "0";
      footerWrap.style.visibility= "hidden";
      onoff= 0;
    }
    else {
      footer.style.bottom= "0";
      footerWrap.style.visibility= "visible";
      footer.style.height= "auto";
      onoff= 1;
    }
  });
}

