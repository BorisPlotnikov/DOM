function enableButton(buttonIdentifier) {
  document.querySelector(buttonIdentifier).removeAttribute("disabled");
  document.querySelector(buttonIdentifier).removeAttribute("aria-disabled");
}

function disableButton(buttonIdentifier) {
  document.querySelector(buttonIdentifier).setAttribute("disabled", "disabled");
  document.querySelector(buttonIdentifier).setAttribute("aria-disabled", "true");
}

function communicate(message) {
  document.querySelector("#results-display-space").innerHTML = (message);
}

function buttonText(buttonIdentifier, lable) {
  document.querySelector(buttonIdentifier).textContent = (lable);
}

function hideButton(buttonIdentifier) {
  document.querySelector(buttonIdentifier).style.visibility = "hidden";
}

function revealButton(buttonIdentifier) {
  document.querySelector(buttonIdentifier).style.visibility = "visible";
}

function hideInstructions(textIdentifier) {
  document.querySelector(textIdentifier).style.visibility = "hidden";
}

function revealInstructions(textIdentifier) {
  document.querySelector(textIdentifier).style.visibility = "visible";
}

function gameReset() {
  document.querySelector(".start-button").textContent = "Play again";
  enableButton(".start-button");
}


function gameStart() {
  enableButton(".player-1-button");
  enableButton(".player-2-button");
  communicate("");
  disableButton(".start-button");
  document.querySelector(".img1").style.opacity = "0.2";
  document.querySelector(".img2").style.opacity = "0.2";
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
  disableButton(".player-2-button");
  var randomNumber1 = (arguments[0]);
  if (randomNumber1 > randomNumber2) {
    communicate("<h1 class='results-text'>🚩 Player 1 Wins!</h1>");
  } else if (randomNumber1 < randomNumber2) {
    communicate("<h1 class='results-text'>Player 2 Wins! 🚩</h1>");
  } else {
    communicate("<h1 class='results-text'>Draw!</h1>");
  }
  revealInstructions("#results-display-space");
  gameReset();
}

function p2PlaysFirst() {
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var image2source = "images/" + "dice" + randomNumber2 + ".png";
  document.querySelector(".img2").setAttribute("src", image2source);
  document.querySelector(".img2").style.opacity = "1";
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
  disableButton(".player-1-button");
  var randomNumber2 = (arguments[0]);
  if (randomNumber1 > randomNumber2) {
    communicate("<h1 class='results-text'>🚩 Player 1 Wins!</h1>");
  } else if (randomNumber1 < randomNumber2) {
    communicate("<h1 class='results-text'>Player 2 Wins! 🚩</h1>");
  } else {
    communicate("<h1 class='results-text'>Draw!</h1>");
  }
  revealInstructions("#results-display-space");
  gameReset();
}
