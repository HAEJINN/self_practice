var menuBtn = document.querySelector(".menu-btn");
var menuBar = document.querySelector(".header");

//1. 페이지 처음 로드시 메뉴버튼 이벤트
window.addEventListener("load", function () {
  document.addEventListener("click", function (event) {
    var inClickInside = menuBar.contains(event.target);
    var menuClicked = menuBtn.contains(event.target);
    //클릭이 메뉴바 안이 아님 + 메뉴버튼이 없을때 (메뉴바 펼져져있을때) : 메뉴버튼 보이게 + 메뉴바 닫기
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
});

//2. 페이지 크기변화시 메뉴버튼 이벤트
window.addEventListener("resize", function () {
  //화면크기 1200px 미만
  if (window.innerWidth < 1200) {
    menuBtn.style.visibility = "visible";
    //메뉴 보이는 상태에서 화면 크기 변하면 메뉴 닫기
    if (menuBar.classList.contains("header-show")) {
      menuBar.classList.add("header-close");
    }
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
  //화면크기 1200px 이상
  else {
    menuBar.classList.remove("header-show");
    menuBar.classList.remove("header-close");
    menuBtn.style.visibility = "hidden";
  }
});

//3. 1200px이상 화면에서 스크롤시 메뉴 표시여부
window.addEventListener("scroll", function () {
  if (window.innerWidth >= 1200) {
    if (
      window.pageYOffset >=
      618 - document.querySelector(".signup-btn").clientHeight
    ) {
      document.querySelector(".nav-list").style.visibility = "hidden";
      document.querySelector(".logo").style.visibility = "hidden";
    } else {
      document.querySelector(".nav-list").style.visibility = "visible";
      document.querySelector(".logo").style.visibility = "visible";
    }
  } else {
    menuBtn.style.visibility = "visible";
    menuBar.classList.add("header-close");
    menuBar.classList.remove("header-show");
  }
});
