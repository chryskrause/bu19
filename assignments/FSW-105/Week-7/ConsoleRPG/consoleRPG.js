const readline = require('readline-sync');

const greeting = readline.question("Hello there! Welcome to Colossal Adventure! May I have your name?")
console.log("Hi, " + greeting + "!")

const action = readline.keyIn('We are ready to play. Press the letter w to walk forward and see what happens... ', {limit: 'w'});

function forwardMarch () {
    if (Math.floor(Math.random() * 4) === 0){
        key = readline.keyIn("You lucky ducky... you win!!! Please choose a number, 1 - 3, to receive a random prize!", {limit: '$<1-3>'})
        if (key === "1") {readline.question("You won a teddy bear with no fur! Press Enter to play again.")}
        if (key === "2") {readline.question("You've won a trip to Spain! Please press Enter to play again.")}
        if (key === "3") {readline.question("Oh no!  You've been tricked!  You get no prize and we just emptied your bank account.  Please press Enter to play again.")}
    } 
    else if (Math.floor(Math.random() * 4) === 1) {
        key2 = readline.keyIn("You've been attacked by a pus monster! What should we do? Press the letter a for maximum attack, press j for minimal attack, s for stand your ground, or r for run", {limit: 'jars'})
        if (key2 === "a"){readline.question("You've been attacked for 1000 stabs, but you've bravely injected one million milligrams of penicillin in the pus monster and killed it! You win the game, and a puppy!")}
        if (key2 === "r"){readline.question("Oh no! The pus monster infected you with pneumonia! You've died =( ")}
        if (key2 === "j")(readline.question("You've attacked a pus monster with a small stick. Like, literally a stick.  We are not sure what you were thinking.  You've died of disentary."))
        if (key2 === "s"){prize = readline.keyIn("Your bravery is impressive! The pus monster slithered off. Please press either 4 or 5 for a prize!", {limit: "$<4-5>"})}
        if (prize === "4") {readline.question("You've won a box of free oxygen! Please press Enter to play again.")}
        if (prize === "5") {readline.question("You've won free healthcare for life!!! No more pus monsters for you!")}
    } 
    else if (Math.floor(Math.random() * 4) === 2) {
        key3 = fool = readline.keyIn("You found the secret door!  You win a gold car, AND the game! No prize!! Press i to claim your prize!", {limit: "i"})
        if (fool === "i") {readline.question("You've been tricked! The floor has opened and you've been swallowed into a black hole.  We do not know where you are. We are sorry.")}
    } 
    else if (Math.floor(Math.random() * 4) === 3){
        key4 = readline.keyIn("Aaah! It's a chupacabra!  What should we do?  Press the letter e for attack, or x for run", {limit: 'ex'})
        if (key4 === "x"){readline.question("Phew! You've escaped! Congratulations! You win a 78 lb bag of nickels! Please press Enter to play again!")}
        if (key4 === "e"){key6 = readline.keyIn("Your attack took 50 points from the chupacabra! Press v to attack again", {limit: "v"})}
        if (key6 === "v"){choice = readline.keyIn("The chupacabra has bitten off your left foot. What would you like to do? Press t to stay and fight! Press m to run!", {limit: "tm"})}
        if (choice === "t") {readline.question("The chupacabra has used your own left leg to beat you to death. =( ")}
        if (choice === "m") {readline.question("Smart idea! While the chupacabra feasted on your leg, you got away successfully! You win! Sorry about your leg!")}
    }
}
forwardMarch(action)


