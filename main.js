window.addEventListener("load", function () {
  let openBtn = document.querySelector(".btn");
  let birdBt = this.document.querySelector(".birdBtn");

  const openWindow = function () {
    open("egg.html", "", "width = 600px, height = 600px");
  };
  openBtn.addEventListener("click", openWindow);

  const openWin = function () {
    open("bird.html", "", "width = 800px, height = 700px");
  };
  birdBt.addEventListener("click", openWin);
});
