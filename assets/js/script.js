// Instructions Pop Up
// instructions button
let instructions = document.getElementById("instructions");
// popup box
let popUp = document.getElementById("popup");
// close popup box button
let close = document.getElementById("close-popup");
// click instructions button for popup box
instructions.addEventListener("click", instructionsPop);
function instructionsPop(){
  popUp.style.display="block";
};
// click close button to close popup box
close.addEventListener("click", closePopUp);
function closePopUp(){
   popUp.style.display = "none";
};