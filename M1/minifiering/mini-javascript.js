// Funktion för att ändra bakgrundsfärg på ett element
/*
function changeColor(element, color) {
  element.style.backgroundColor = color;
}

document.getElementById("myButton").addEventListener("click", function () {
  changeColor(this, "red");
});
*/

function changeColor(e,c){e.style.backgroundColor=c}document.getElementById("myButton").addEventListener("click",function(){changeColor(this,"red")});
