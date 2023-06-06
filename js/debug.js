// Nav horizontal scroll btn
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

const IconVisibility = () => {
  let scrollLeftValue = Math.ceil(tabMenu.scrollLeft);
  //   console.log("1.", scrollLeftValue);
  let scrollableWidth = tabMenu.scrollWidth - tabMenu.clientWidth;
  //   console.log("2.", scrollableWidth);

  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
  btnRight.style.display = scrollableWidth > scrollLeftValue ? "block" : "none";
};

btnRight.addEventListener("click", () => {
  tabMenu.scrollLeft += 720;
  //   IconVisibility();
  setTimeout(() => IconVisibility(), 50);
});

btnLeft.addEventListener("click", () => {
  tabMenu.scrollLeft -= 720;
  //   IconVisibility();
  setTimeout(() => IconVisibility(), 50);
});

window.onload = function () {
  btnRight.style.display =
    tabMenu.scrollWidth > tabMenu.clientWidth ||
    tabMenu.scrollableWidth >= window.innerWidth
      ? "block"
      : "none";
  btnLeft.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
  btnRight.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
};

window.onresize = function () {
  tabMenu.scrollWidth > tabMenu.clientWidth ||
  tabMenu.scrollableWidth >= window.innerWidth
    ? "block"
    : "none";
  btnLeft.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";
  btnRight.style.display =
    tabMenu.scrollWidth >= window.innerWidth ? "" : "none";

  let scrollLeftValue = Math.round(tabMenu.scrollLeft);

  btnLeft.style.display = scrollLeftValue > 0 ? "block" : "none";
};

// draggable
let activeDrag = false;

tabMenu.addEventListener("mousemove", (drag) => {
  if (!activeDrag) return;
  tabMenu.scrollLeft -= drag.movementX;
  IconVisibility();
});

tabMenu.addEventListener("mouseup", () => {
  activeDrag = false;
});

tabMenu.addEventListener("mousedown", () => {
  activeDrag = true;
});
