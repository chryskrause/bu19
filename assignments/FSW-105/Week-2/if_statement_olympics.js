//Write an if statement that prints "is greater than" if 5 is greater than 3
if (5 > 3){
    console.log("is greater than")
}

//Write an if statement that prints "is the length" if the length of "cat" is 3
document.getElementsByClassName("cat")
if ("cat" === 3) {
    console.log("is the length")
}

//Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.
if ("cat" !== "dog"){
        console.log("not the same")
    }


var person = {
    name: "Bobby",
    age: 12
}

//Using the [above] object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie if they are old enough (18 or older), and the opposite if they are not older than 18.
if (age > 18) {
    console.log(name "is allowed to go to the movie")
} else {
    console.log(name "is not allowed to go to the movie")
}

//Using that same object, only allow them into the movie if their name starts with "B".
if (name.charAt(0) !== B){
    alert("Not allowed into movie")
}

//Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.
if ( (name.charAt(0) !== B ) && (age < 18) ){
    alert("Not allowed into movie!")
}

//Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff.
if (1 === 1){
    alert("strict")
} else if ("1" == 1) {
    alert("loose")
} else {
    alert("not equal at all")
}

//Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4.
if ( ( 1 <= 2 ) && (2 === 4) ) {
    console.log("yes")
}

//Write an if statement that checks to see if "dog" is a string
if (typeof "dog" === "string"){
    alert("stringy")
}

//Write an if statement that checks to see if "true" is a boolean
if (typeof "true" === "boolean"){
    console.log("this is a string")
} else {
    console.log("this is not a string")
}

//Write an if statement that checks to see if a variable has been defined or not

if (typeof variable === "undefined"){
    console.log("This variable is undefined")
} else {
    console.log("This variable is defined")
}


//Write an if statement asking if "s" greater than 12?


if ( "s" > 12 ) {
    console.log("Yes, s is greater than twelve")
} else {
    console.log("No, s is not greater than twelve")
}


