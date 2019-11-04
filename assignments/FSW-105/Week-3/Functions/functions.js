function sum (num1, num2){
    console.log(num1 + num2)
}
var result = sum (15, 15)

function largestNum (num3, num4, num5){
    console.log(Math.max(num3, num4, num5))
}
var result2 = largestNum (78, 0.8, 764)

function evenOrOdd (number){
    if (number % 2 === 0) {
        console.log("This is an even number")
    } else if (number % 2 !== 0) {
        console.log("This is an odd number")
    }}
 var result3456 = evenOrOdd (23)


function stringy (characterCount){
    if (characterCount.length <= 20){
    console.log(characterCount + characterCount)
    } else if (characterCount.length > 20)
    console.log(characterCount.length / 2)
}
var a = stringy ("These are my characters")