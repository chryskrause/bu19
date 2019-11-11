const readline = require('readline-sync');

num1 = readline.question("What is your first number?");
console.log(num1);

num2 = readline.question("What is your second number?");
console.log(num2);


const answerOperation = readline.question("Would you like to add, subtract, multiply, or divide these numbers?")
    function finalAnswer() { 
        if (answerOperation === "add") {
            console.log(addNums())
        }
    }
answerOperation(addNums)

/*
Function final Answer() { 
    If answerOperation == add { addNums() }}
    answerOperation() (edited) 
*/


/*
function finalAnswer (){
    if (answerOperation === "add"){
        return addNums()
    } else {
        return multiplyNums
    }
}
*/

function addNums (num1, num2){
    return num1 + num2
}

function multiplyNums (num1, num2) {
    return num1 * num2
}

function divideNums (num1, num2) {
    return num1 / num2
}

function subtractNums (num1, num2) {
    return num1 - num2
}
