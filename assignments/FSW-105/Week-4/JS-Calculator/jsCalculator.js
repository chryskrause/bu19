const readline = require('readline-sync');

function addNums (num1, num2){
    console.log(num1 + num2)
}


function multiplyNums (num3, num4) {
    console.log(num3 * num4)
}

function divideNums (num5, num6) {
    console.log(num5 / num6)
}

function subtractNums (num7, num8) {
    console.log(num7 - num8)
}


const userInput1 = readline.question("What is your first number?");
console.log(userInput1);

const userInput2 = readline.question("What is your second number?");
console.log(userInput2);


const answerOperation = readline.question("Would you like to add, subtract, multiply, or divide these numbers?")
    
function finalAnswer(answer) { 
        if (answer === "add") {
        addNums(userInput1, userInput2)
        }
    }
 finalAnswer(answerOperation)


