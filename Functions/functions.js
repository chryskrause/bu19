const add = function (num1, num2){
    console.log("hey, I am adding")
    console.log("value for parameter 1 equals" + num1)
    return num1 + num2
}

const subtract = function (num1, num2){
    console.log("hey, I am subtracting")
    return num1 - num2
}

const multiply = function (num1, num2) {
    console.log("hey, I am multiplying")
    return num1 * num2
}

const divide = function (num1, num2) {
    if(num2 == 0){
        return 0
    }
    console.log("hey, I am dividing")
    return num1 / num2
}

// ask for inputs
console.log("enter the value for the parameter")
const val1 = 10
const val2 = 100
// first, ask for parameter num1
// second, ask for parameter num2
const operation = divide
const result = operation(val1, val2)
// ask for operation
console.log(result)