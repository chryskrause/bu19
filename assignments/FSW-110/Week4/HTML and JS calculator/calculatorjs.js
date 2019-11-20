document.body.style.backgroundColor = "lightblue";

/*
<div id="add">
        Addition <input type="number" id="num1"/>
        <input type="number" id="num2"/>
        <button type="button" id="addbutton">Get Answer</button>
    </div>
    */

//const addAll = document.getElementById("add");
const number1 = document.getElementById("num1").value;
const number2 = document.getElementById("num2").value;
const adds = document.getElementById("add");
adds.addEventListener("submit", (event) => {
    event.preventDefault()
    const answer1 = function sum (){
        return (number1 + number2).innerHTML

    }
})
sum();
// document.getElementById("addbutton").addEventListener("submit", answer1());
// function answer1 (number1, number2){
//      (number1 + number2);    
// }
// answer1(number1, number2)


