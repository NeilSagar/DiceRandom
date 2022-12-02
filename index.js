var randomnumber1=Math.floor(1+6*Math.random());
var randomnumber2=Math.floor(1+6*Math.random());

var firstimgsrc="images/dice"+randomnumber1+".png";
var secondimgsrc="images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",firstimgsrc);
document.querySelectorAll("img")[1].setAttribute("src",secondimgsrc);


if(randomnumber1==randomnumber2)
{
  document.querySelector("h1").innerHTML="Draw!";
}
else if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!"
}
else{
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"
}

