document.body.style.backgroundColor = "darkgray"
document.getElementById("nameForm").style.fontSize = "25px"
document.getElementById("nameForm").style.color = "white"
document.getElementById("log").style.fontSize = "20px"
document.getElementById("log").style.color = "white"

document.nameForm.addEventListener("submit", function(e){
    e.preventDefault()
    const names = document.nameForm.name1.value
    const nickNames = document.nameForm.nickname1.value

    const a = document.createElement("LI");
    const b = document.createTextNode("Name: " + names + ", Chore: " + nickNames);
    a.appendChild(b)
    document.getElementById("log").appendChild(a);
    const buttons = document.createElement("button")
    buttons.innerHTML = "Delete"
    a.appendChild(buttons)

    document.getElementById("nameForm").reset();   
})



