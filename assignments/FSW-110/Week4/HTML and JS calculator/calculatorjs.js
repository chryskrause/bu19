document.body.style.backgroundColor = "lightblue";


/*
<div id="add">
        Addition <input type="number" id="num1"/>
        <input type="number" id="num2"/>
        <button type="button" id="addbutton">Get Answer</button>
    </div>
    */

//const addAll = document.getElementById("add");
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
document.getElementById("addbutton").addEventListener("onclick", answer1);
function answer1 (number1, number2){
     (number1 + number2);    
}


/*Note: even when I tried an alert, I got NaN and that number1 and number2 are undefined or something.
Tried some things with value
Tried working in some innerHTML after the eventListener ()
*/