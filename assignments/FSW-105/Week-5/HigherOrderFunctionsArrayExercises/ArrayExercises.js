// node ArrayExercises.js
// 1) Return array that only has numbers 5 and greater, using filter.
const arr = [3, 6, 8, 2]
const result = arr.filter(num => num >= 5)
    
console.log(result)

// 2) Given an array, return only the even numbers, using filter.
const arr2 = [3, 6, 8, 2]
const result2 = arr2.filter(num1 => num1 % 2 === 0)
console.log(result2)

// 3) Given array of strings, return only those less than 5 characters, using filter.
const arr3 = ["dog", "wolf", "by", "family", "eaten", "camping"]
const result3 = arr3.filter(string => string.length <= 5)
console.log(result3)

// 4) Given array of people objects, return array that filters out those that 
// do not belong to the club.
const arr4 = [
    {name: "Angelina Jolie", member: true},
    {name: "Eric Jones", member: false},
    {name: "Paris Hilton", member: true},
    {name: "Kanye West", member: false},
    {name: "Bob Ziroll", member: true}
]
const result4 = arr4.filter (string2 => string2.member === true)
console.log(result4)

// 5) Make filtered list of all old enough to see The Matrix (younger than 18)
const arr5 = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]

const result5 = arr5.filter (oldEnough => oldEnough.age > 18)
console.log(result5)

// 1) use .map() to make array of numbers that are doubles of first array

const arr6 = [2, 5, 100]

const result6 = arr6.map(num2 => num2 * 2)
console.log(result6)

// 2) Take an array of numbers and make them strings

const arr7 = [2, 5, 100]

const result7 = arr7.map(String)
console.log(result7)

// 3) Use map() to capitalize first letter of array of given names

const arr8 = ["john", "JACOB", "jinGleHeimer", "schmidt"]


// const result8 = arr8[0][1][2][3].toLowerCase().split(' ').map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
// console.log(result8)

