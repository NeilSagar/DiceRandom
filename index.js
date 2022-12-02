var randomnumber1=Math.floor(1+6*Math.random());
var randomnumber2=Math.floor(1+6*Math.random());

var firstimgsrc="images/dice"+randomnumber1+".png";
var secondimgsrc="images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",firstimgsrc);
document.querySelectorAll("img")[1].setAttribute("src",secondimgsrc);
// document.querySelector(".dice1 img").setAttribute("src",firstimgsrc);
// document.querySelector(".dice2 img").setAttribute("src",secondimgsrc);

// if(randomnumber1==randomnumber2)
// {
//   document.querySelector("h1").innerHTML="Draw!";
// }
// else if(randomnumber1>randomnumber2)
// {
//   document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
// }
// else{
//   document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
// }
//
// if(randomnumber1==1)
// {
//   document.querySelector(".dice1 img").setAttribute("src","images/dice1.png");
// }
// else if(randomnumber1==2)
// {
//   document.querySelector(".dice1 img").setAttribute("src","images/dice2.png");
// }
// else if(randomnumber1==3)
// {
//   document.querySelector(".dice1 img").setAttribute("src","images/dice3.png");
// }
// else if(randomnumber1==4)
// {
//   document.querySelector(".dice1 img").setAttribute("src","images/dice4.png");
// }
// else if(randomnumber1==5)
// {
//   document.querySelector(".dice1 img").setAttribute("src","images/dice5.png");
// }
// else if(randomnumber1==6)
// {
//   document.querySelector(".dice1 img").setAttribute("src","images/dice6.png");
// }
//
// if(randomnumber2==1)
// {
//   document.querySelector(".dice2 img").setAttribute("src","images/dice1.png");
// }
// else if(randomnumber2==2)
// {
//   document.querySelector(".dice2 img").setAttribute("src","images/dice2.png");
// }
// else if(randomnumber2==3)
// {
//   document.querySelector(".dice2 img").setAttribute("src","images/dice3.png");
// }
// else if(randomnumber2==4)
// {
//   document.querySelector(".dice2 img").setAttribute("src","images/dice4.png");
// }
// else if(randomnumber2==5)
// {
//   document.querySelector(".dice2 img").setAttribute("src","images/dice5.png");
// }
// else if(randomnumber2==6)
// {
//   document.querySelector(".dice2 img").setAttribute("src","images/dice6.png");
// }
