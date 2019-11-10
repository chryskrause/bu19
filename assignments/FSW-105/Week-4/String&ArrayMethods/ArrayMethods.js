var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var noLettuce = vegetables.pop()
console.log(vegetables)

var noBanana = fruit.shift()
console.log(fruit)

var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

var addOrangeIndex = fruit.push(orangeIndex)
console.log(fruit)

console.log(vegetables.length)

var addVegArr = vegetables.push(vegetables.length)
console.log(vegetables)

var food = fruit.concat(vegetables)
console.log(food)

var newFoodArr = food.splice(4, 2)
console.log(food)

var reverseFood = food.reverse()
console.log(reverseFood)

var arrToString = reverseFood.join(',')
console.log(arrToString)

