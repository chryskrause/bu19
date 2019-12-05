const readline = require('readline-sync');

const greeting = readline.question("Hello there! Thank you for travelling to 1985 with me! May I have your name?")
console.log("Hi, " + greeting + "!")

const action = readline.keyIn('We are ready to play. Press the letter w to walk forward and see what happens... ', {limit: 'w'});

// function forwardMarch(){
//     if ((Math.floor(Math.random() * 21)) % 4 === 0){
//         console.log("You lucky devil, you've won!!!")
//     } else {
//         console.log("You've been attacked!  Here are the options!")
//     }
// }
// forwardMarch(action)

function forwardMarch(){
    if (Math.floor(Math.random()) * 3 === 0){
        console.log("You lucky ducky... you win!!!")
    } else if (Math.floor(Math.random()) * 3 === 1) {
        console.log("You've been attacked by a pus monster! What should we do? Press the letter a for attack, or r for run")
    } else if (Math.floor(Math.random()) * 3 === 2) {
        console.log("Oh no, you've been attacked by a pack of evil baby gorillas! What should we do? Press the letter a for attack, or r for run")
    } else if (Math.floor(Math.random()) * 3 === 3) {
        console.log("Aaah! It's a chupacabra!  What should we do?  Press the letter a for attack, or r for run")
    }
}
forwardMarch(action)




// function attack(){
//     if (forwardMarch(action) % 4 !== 0)
// }


// node consoleRPG.js
