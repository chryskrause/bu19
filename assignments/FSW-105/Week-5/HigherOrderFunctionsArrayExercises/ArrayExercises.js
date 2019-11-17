// filter() exercises
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

// map() exercises
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

const result8 = arr8.map(names => names.charAt(0).toUpperCase() + names.substr(1).toLowerCase());
console.log(result8)

// 4) Make an array of strings of the names

const arr9 = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]

const result9 = arr9.map(arrOfStrings => arrOfStrings.name)
console.log(result9)

// 5) Make an array of strings of the names saying if they can go to the matrix

const arr10 = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]

const result10 = arr10.map(names10 => names10.age < 18 ? console.log(names10.name + " is underage.  Cannot see movie.  It's an agent") : 
console.log(names10.name + " is old enough to see The Matrix. Unplug them"))

// 6) Make an array of the names in h1s, ages in h2s

const arr11 = [
    {name: "Angelina Jolie", age: 80},
    {name: "Eric Jones", age: 2},
    {name: "Paris Hilton", age: 5},
    {name: "Kanye West", age: 16},
    {name: "Bob Ziroll", age: 100}
]

const result11 = arr11.map(headsUp => "<h1>"+headsUp.name+"</h1>"+"<h2>"+headsUp.age+"</h2>")
console.log(result11)


// reduce() exercises
// 1) Turn an array of numbers into a total of all numbers

const arr12 = [1, 2, 3]

const result12 = arr12.reduce(function(final, num3){
    final += num3
    return final
})
console.log(result12)

// 2) Turn array of numbers into long string of numbers [1,2,3] to "123"

const arr13 = [1, 2, 3]

const result13 = arr13.reduce(function(final2, num4){
    final2 = final2 + num4
    return final2
}, "")
console.log(result13)

// 3) Turn array of voter objects into count of how many people voted

const arr14 = [
    {name:'Bob', age: 30, voted: true},
    {name:'Jake', age: 32, voted: true},
    {name:'Kate', age: 25, voted: false},
    {name:'Sam', age: 20, voted: false},
    {name:'Phil', age: 21, voted: true},
    {name:'Ed', age: 55, voted: true},
    {name:'Tami', age: 54, voted: true},
    {name:'Mary', age: 31, voted: false},
    {name:'Becky', age: 43, voted: false},
    {name:'Joey', age: 41, voted: true},
    {name:'Jeff', age: 30, voted: true},
    {name:'Zack', age: 19, voted: false}
]

const result14 = arr14.reduce(function(final3, voter){
    if(voter.voted){
        final3++
    }
    return final3
}, 0)
console.log(result14)

// 4) Given an array, figure total costs

const arr15 = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000}
]

const result15 = arr15.reduce(function(final4, pricing){
    final4 = final4 + pricing.price
    return final4
}, 0)
console.log(result15)

// 5) Given array of arrays, flatten into a single array

const arr16 = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

const result16 = arr16.reduce(function(final5, arrOfArrs){
    final5 = final5.concat(arrOfArrs)
    return final5
})
console.log(result16)

// node ArrayExercises.js
