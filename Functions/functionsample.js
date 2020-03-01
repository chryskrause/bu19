const Add = function(num1, num2) {
    return num1 + num2}

const subtract = function(num1, num2) {
        return num1 - num2}

const multiply = function(num1, num2) {
        return num1 * num2}

const display = function(func1, num1, num2) {
    let addNums =  func1 (num1, num2)
    console.log(addNums)
}
display(multiply, 4, 10)