document.body.style.backgroundColor = "lightblue";

addNumbers = (number1, number2) => {
    return number1 + number2
}

document.getElementById('addBtn').addEventListener("click", () => {
    const num1 = parseInt(document.getElementById('numAdd1').value)
    const num2 = parseInt(document.getElementById('numAdd2').value)
   
    const additionResult = addNumbers(num1, num2)

   
   document.getElementById('showAddition').innerHTML = additionResult
});

subtractNumbers = (number3, number4) => {
    return number3 - number4
}

document.getElementById("subtractBtn").addEventListener("click", () => {
    const num3 = parseInt(document.getElementById("numSub3").value)
    const num4 = parseInt(document.getElementById("numSub4").value)

    const subtractResult = subtractNumbers(num3, num4)

    document.getElementById("showSubtraction").innerHTML = subtractResult
});

multiplyNumbers = (number5, number6) => {
    return number5 * number6
}

document.getElementById("multBtn").addEventListener("click", () => {
    const num5 = parseInt(document.getElementById("num5").value)
    const num6 = parseInt(document.getElementById("num6").value)

    const multiplyResult = multiplyNumbers(num5, num6)

    document.getElementById("showMultiply").innerHTML = multiplyResult
})

