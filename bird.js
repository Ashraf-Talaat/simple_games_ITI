window.addEventListener("load", function () {
  // select elements
  let birdContainer = this.document.querySelector(".bird-container");
  let birdImg = this.document.querySelector(".bird-img");
  let birdImage = this.document.querySelector(".bird-image");
  let scoreEle = this.document.querySelector(".score");
  let shootSound = this.document.querySelector("audio");

  //declare  variables
  let score = 0;
  let speed = 3;
  let direction = 1;

  // function to display new random position
  const displayImg = function () {
    let birdY = Math.floor(Math.random() * (birdContainer.offsetHeight - 80));
    let birdX = Math.floor(Math.random() * (birdContainer.offsetWidth - 80));

    birdImg.style.top = birdY + "px";
    birdImg.style.left = birdX + "px";
    birdImage.style.display = "block";
  };

  //event on bird  and add score and sound
  birdImg.addEventListener("click", (e) => {
    shootSound.play();

    e.target.style.display = "none";

    score++;
    scoreEle.textContent = score;

    setTimeout(displayImg, 1000);
  });

  // function to move bird
  const moveImg = function () {
    if (birdImg.style.display === "none") return;

    let currentX = parseInt(birdImg.style.left);
    currentX += speed * direction;

    // change direction

    if (currentX >= birdContainer.offsetWidth - 80) {
      direction *= -1;
      birdImage.style.transform = "scaleX(-1)";
    } else if (currentX <= 0) {
      direction *= -1;
      birdImage.style.transform = "scaleX(1)";
    }

    birdImg.style.left = currentX + "px";
    // smooth move
    requestAnimationFrame(moveImg);
  };
  displayImg();
  moveImg();
});
