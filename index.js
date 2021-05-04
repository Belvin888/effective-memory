function di1() {
  var v = Math.random();
  v = Math.floor(v * 6) + 1;
  return v;
}
var b = di1();
if (b == 1) {
  document.querySelector("img").setAttribute("src", "images/dice1.png");
} else if (b == 2) {
  document.querySelector("img").setAttribute("src", "images/dice2.png");
} else if (b == 3) {
  document.querySelector("img").setAttribute("src", "images/dice3.png");
} else if (b == 4) {
  document.querySelector("img").setAttribute("src", "images/dice4.png");
} else if (b == 5) {
  document.querySelector("img").setAttribute("src", "images/dice5.png");
} else if (b == 6) {
  document.querySelector("img").setAttribute("src", "images/dice6.png");
}

function di2() {
  var v = Math.random();
  v = Math.floor(v * 6) + 1;
  return v;
}
var c = di2();
if (c == 1) {
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
} else if (c == 2) {
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
} else if (c == 3) {
document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
} else if (c == 4) {
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
} else if (c == 5) {
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
} else if (c == 6) {
  document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}


if(b>c){
 document.querySelector("h1").innerHTML = "🚩player 1 won!";
}
else if(b<c) {
  document.querySelector("h1").innerHTML = "🚩player 2 won!";
}
else{
  document.querySelector("h1").innerHTML = "🏳‍ It's a draw";
}
