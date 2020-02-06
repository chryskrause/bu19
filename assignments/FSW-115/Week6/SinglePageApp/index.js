async function getData(){
    try{
        const response = await axios.get("https://swapi.co/api/people/1/")
            const lukeInfo = response.data
                happyFamily(lukeInfo)
        const response2 = await axios.get("https://swapi.co/api/people/5/")
            const leiaInfo = response2.data
                happyFamily(leiaInfo)
        const response3 = await axios.get("https://swapi.co/api/people/4/")
            const darthInfo = response3.data
                happyFamily(darthInfo)
    }
        catch(error){
            console.log(error)
    }
}

getData()

function happyFamily(person){
    console.log(person)
    const h1 = document.createElement("h1")
    h1.textContent = "Name: " + person.name
    document.body.appendChild(h1)
    
//h1.textContent = JSON.stringify(person)
}

