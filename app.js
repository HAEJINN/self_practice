var menuBtn = document.querySelector(".menu-btn");
var menuBar = document.querySelector(".header");

window.addEventListener("resize", function () {
  //화면 크기 변화 : 1200px 미만
  if (window.innerWidth < 1200) {
    menuBtn.style.visibility = "visible";
    //메뉴 보이는 상태에서 화면 클기 변하면 메뉴 닫기
    if (menuBar.classList.contains("header-show")) {
      menuBar.classList.add("header-close");
    }
    //클릭시
    document.addEventListener("click", function (event) {
      var inClickInside = menuBar.contains(event.target);
      var menuClicked = menuBtn.contains(event.target);
      //클릭이 메뉴바 안이 아니고 메뉴버튼이 없을때 (메뉴바 펼져져있을때) : 메뉴버튼 보이게 + 메뉴바 닫기
      if (!inClickInside && menuBtn.style.visibility === "hidden") {
        menuBtn.style.visibility = "visible";
        menuBar.classList.add("header-close");
        menuBar.classList.remove("header-show");
      }
      // 클릭이 메뉴버튼일때 : 메뉴버튼 안보이게 + 메뉴바 보이기
      if (menuClicked) {
        menuBtn.style.visibility = "hidden";
        menuBar.classList.add("header-show");
        menuBar.classList.remove("header-close");
      }
    });
  }
  //화면 크기 변화 : 1200px 이상
  else {
    menuBar.classList.remove("header-show");
    menuBar.classList.remove("header-close");
    menuBtn.style.visibility = "hidden";
  }
});
