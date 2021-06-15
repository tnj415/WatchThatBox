document.getElementById("button1").onclick = function() {myGrow()};
document.getElementById("button2").onclick = function() {myBlue()};
document.getElementById("button3").onclick = function() {myFade()};
document.getElementById("button4").onclick = function() {myShade()};
document.getElementById("button5").onclick = function() {myReset()};


function myGrow() {
  document.getElementById("box").style="height:300px; width:300px; background-color:orange; margin:25px; opacity: 1";

}

function myBlue() {
  document.getElementById("box").style.backgroundColor="blue";
}

function myFade() {
  if (document.getElementById("box").style.opacity > .5)
  {
    document.getElementById("box").style.opacity="50%";
  }
  else document.getElementById("box").style.opacity="25%";
}

function myShade() {
    if (document.getElementById("box").style.opacity < .5)
  {
    document.getElementById("box").style.opacity="50%";
  }
  else document.getElementById("box").style.opacity="100%";
}

function myReset() {
  document.getElementById("box").style="height:150px; width:150px; background-color:orange; margin:25px; opacity: 1";
}