const formStyle = document.getElementById("form1")
document.body.style.backgroundColor = "lightblue";
formStyle.style.fontSize = "20px";
const header = document.getElementById("header")
header.style.textDecoration = "underline"


const form = document.passengersInfo

form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert((form.fName.value) + ", " + (form.lName.value) + ", " + (form.age.value + " years old")  + ", " + (form.gender.value) + ", " + (form.city.value))
        
    const dietInputs = []
    for(let i = 0; i < form.food.length; i++){
        if(form.food[i].checked){
            dietInputs.push(form.food[i].value)
        }
    }
  alert(dietInputs)
})

