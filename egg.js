window.addEventListener("load", function () {
  // select elements
  let gameContainer = document.querySelector(".gameContainer");
  let basket = document.querySelector(".basket");
  let egg = document.querySelector(".egg");
  let breakEgg = document.querySelector(".break-egg");
  let scoreEle = this.document.querySelector(".score");

  // let bonus = this.document.querySelector(".bonus");
  // let breakSound = this.document.querySelector(".br-sound");

  //display new random position
  let basketX = gameContainer.offsetWidth / 2 - 45;
  let eggX = Math.random() * (gameContainer.offsetWidth - 70);

  //declare variables
  let basketSpeed = 0;
  let eggSpeed = 4;
  let eggY = 0;
  let score = 0;

  //event move basket
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") basketSpeed = -5;
    if (e.key === "ArrowRight") basketSpeed = 5;
  });

  //event stop basket
  document.addEventListener("keyup", () => {
    basketSpeed = 0;
  });

  //function display basket in container
  const moveBasket = function () {
    if (basketX < 0) {
      basketX = 0;
    }
    if (basketX + 90 > gameContainer.offsetWidth) {
      basketX = gameContainer.offsetWidth - 90;
    }
    basketX += basketSpeed;
    basket.style.left = basketX + "px";
  };

  //function to move egg
  const moveEgg = function () {
    eggY += eggSpeed;
    egg.style.left = eggX + "px";
    egg.style.top = eggY + "px";

    if (
      eggY + 60 >= gameContainer.offsetHeight - 60 &&
      eggX > basketX &&
      eggX < basketX + 80
    ) {
      resetEgg();

      // bonus.play();

      score++;
      scoreEle.textContent = score;
    } else if (eggY > gameContainer.offsetHeight - 60) {
      eggSpeed = 0;

      let currentEggX = eggX;
      let currentEggY = eggY;
      breakEgg.style.left = currentEggX + "px";
      breakEgg.style.top = currentEggY + "px";

      egg.style.display = "none";
      breakEgg.style.display = "block";

      // breakSound.play();

      setTimeout(() => {
        resetEgg();
      }, 1000);
    }
  };

  //function to reset egg
  const resetEgg = function () {
    eggX = Math.random() * (gameContainer.offsetWidth - 30);
    eggY = 0;
    eggSpeed = 4;

    breakEgg.style.display = "none";
    egg.style.display = "block";
  };

  const update = function () {
    moveBasket();
    moveEgg();
    requestAnimationFrame(update);
  };
  update();
});
