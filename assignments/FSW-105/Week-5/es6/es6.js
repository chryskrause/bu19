// Replace all the vars with let and const. Alter the code however necessary to 
// make sure this continues to work (so the pet's name isn't "John", but instead 
// "spot" is returned). You only need to delete var and insert let and const.
// John is the pet owner, and his name should be stored differently than the 
// other names.

let name = "John"
const age = 101

function runForLoop(pets){
    const petObjects = []
    for (let i = 0; i < pets.length; i++){
        let pet = { type: pets[i] }
        name;
        if (pets[i] === "cat"){
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}
runForLoop(["cat", "dog"])

//Rewrite using arrow function.

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = arr => {
    arr.map(function(carrot) {
        return {type: "carrot", name: carrot}
})}
mapVegetables(carrots)


//Rewrite using arrow function

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario", 
        friendly: true
    },
    {
        name: "Bowswer", 
        friendly: false
    }
]

const filterForFriendly = arr => arr.filter(people => {
    if (people.friendly === true){
        return true
        }   
    })

//Rewrite as arrow functions

// function doMathSum(a,b) {
//     return a + b
// }
const doMathSum = (a,b) => a + b

// var produceProduct = function(a,b) {
//     return a * b
// }

const produceProduct = (a,b) => a * b
//write printString function...
const printString = (c, d, e) => {
    console.log("Hi " + c + " " + d + ", how does it feel to be " + e + "?")
}
printString("Jane", "Doe", 100)
//Using template literals
const printString2 = (c, d, e) => {
    console.log(`Hi ${c} ${d}, how does it feel to be ${e}?`)
}
printString2("John", "Doe", 100)

//Use shorthand to make the filter take up one line
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name:"piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
]
const filterForDogs = arr1 => arr1.filter(animals => {animals.type === "dog" ? console.log(true) : console.log(false)})
filterForDogs(animals)

//Using template literals, write a function that outputs a message

const hawaiiJanice = (x, y) => {
    console.log(`Hi ${x}!
    Welcome to ${y}.
    I hope you enjoy your stay. Please ask the President of ${y} if you need anything.`)
}
hawaiiJanice("Janice", "Hawaii")




