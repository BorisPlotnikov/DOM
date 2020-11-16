function enableButton(buttonIdentifier) {
  document.querySelector(buttonIdentifier).removeAttribute("disabled");
  document.querySelector(buttonIdentifier).removeAttribute("aria-disabled");
}

function disableButton(buttonIdentifier) {
  document.querySelector(buttonIdentifier).setAttribute("disabled", "disabled");
  document.querySelector(buttonIdentifier).setAttribute("aria-disabled", "true");
}

function player1Winner() {
  document.querySelector(".lable1").innerHTML = "<h2 class='declaration'>🚩 Winner!</h2>";
}

function player2Winner() {
  document.querySelector(".lable2").innerHTML = "<h2 class='declaration'>🚩 Winner!</h2>";
}

function draw() {
  document.querySelector(".lable1").innerHTML = "<h2 class='declaration'>Draw</h2>";
  document.querySelector(".lable2").innerHTML = "<h2 class='declaration'>Draw</h2>";
}

function gameReset() {
  document.querySelector(".play-button").textContent = "Play again";
  enableButton(".play-button");
}


function gameStart() {
  document.querySelectorAll(".roll-button").forEach(el => el.style.opacity = 1);
  enableButton(".player-1-button");
  enableButton(".player-2-button");
  document.querySelector(".lable1").textContent = "Player 1";
  document.querySelector(".lable2").textContent = "Player 2";
  disableButton(".play-button");
  document.querySelectorAll(".dice-img").forEach(el => el.style.opacity = .4);
  document.querySelector(".player-1-button").onclick = function() {
    p1PlaysFirst()
  }
  document.querySelector(".player-2-button").onclick = function() {
    p2PlaysFirst()
  }
}


function p1PlaysFirst() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var image1source = "images/" + "dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", image1source);
  document.querySelector(".img1").style.opacity = "1";
  document.querySelector(".player-1-button").style.opacity = ".4";
  disableButton(".player-1-button");
  document.querySelector(".player-2-button").onclick = function() {
    p2PlaysSecond()
    p2PlaysSecond(randomNumber1);
  }
}


function p2PlaysSecond() {
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var image2source = "images/" + "dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", image2source);
  document.querySelector(".img2").style.opacity = "1";
  document.querySelector(".player-2-button").style.opacity = ".4";
  disableButton(".player-2-button");
  var randomNumber1 = (arguments[0]);
  if (randomNumber1 > randomNumber2) {
    player1Winner();
  } else if (randomNumber1 < randomNumber2) {
    player2Winner();
  } else if (randomNumber1 === randomNumber2) {
    draw();
  }
  gameReset();
}

function p2PlaysFirst() {
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var image2source = "images/" + "dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", image2source);
  document.querySelector(".img2").style.opacity = "1";
  document.querySelector(".player-2-button").style.opacity = ".4";
  disableButton(".player-2-button");
  document.querySelector(".player-1-button").onclick = function() {
    p1PlaysSecond()
    p1PlaysSecond(randomNumber2);
  }
}

function p1PlaysSecond() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var image1source = "images/" + "dice" + randomNumber1 + ".png";
  document.querySelector(".img1").setAttribute("src", image1source);
  document.querySelector(".img1").style.opacity = "1";
  document.querySelector(".player-1-button").style.opacity = ".4";
  disableButton(".player-1-button");
  var randomNumber2 = (arguments[0]);
  if (randomNumber1 > randomNumber2) {
    player1Winner();
  } else if (randomNumber1 < randomNumber2) {
    player2Winner();
  } else if (randomNumber1 === randomNumber2) {
    draw();
  }
  gameReset();
}
