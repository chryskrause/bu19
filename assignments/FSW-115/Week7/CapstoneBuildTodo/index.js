const todoForm1 = document.getElementById("todoform")

todoForm1.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        title: todoForm1.title.value,
        description: todoForm1.description.value,
        imgUrl: todoForm1.imgUrl.value
    }

    axios.post("https://api.vschool.io/CKrause/todo/", newTodo)
        .then(response => {console.log(response)

            const div = document.createElement("div")
            document.body.appendChild(div)
            div.id = response.data._id

            const customTodo = document.createElement("h1")
            customTodo.textContent = response.data.title
            div.appendChild(customTodo)

            const description1 = document.createElement("h1")
            description1.textContent = response.data.description
            div.appendChild(description1)

            var image1 = document.createElement("IMG");
            image1.setAttribute("src", response.data.imgUrl);
            image1.setAttribute("width", "auto");
            image1.setAttribute("height", "400");
            image1.setAttribute("alt", "Todo");
            div.appendChild(image1)

            // const deleteTodo = document.createElement("button")
            // deleteTodo.textContent = "Delete"
            // div.appendChild(deleteTodo)
        }
            )
        .catch(error => console.log(error))
})



// })
const deleteAPI1 = document.getElementById("deleteAPIs")
const deleteInput = deleteAPI1.id
deleteAPI1.addEventListener("submit", function(event){
    event.preventDefault()

const response = axios.get("https://api.vschool.io/CKrause/todo/")
    const todoList = response.data;


const deleteAPI = function(singleTodo){
    axios.delete("https://api.vschool.io/CKrause/todo/" + deleteInput.value).then(function(response){
        alert("Deleted!")
    }, function(response){
        alert("Error with deletion!")
    })
}
deleteAPI()
})


    var x = document.createElement("HEADER");
    x.setAttribute("id", "myHeader");
    document.body.appendChild(x);
  
    var y = document.createElement("H3"); 
    var t = document.createTextNode("Click here to see my Todos!");
    y.appendChild(t);
  
    document.getElementById("myHeader").appendChild(y);


    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn).innerHTML = "Click here"

    btn.addEventListener("click", function(event){
    event.preventDefault()

    axios.get("https://api.vschool.io/CKrause/todo/")
    .then(response => {
        console.log(response)

    
     for (let i = 0; i < 5; i++){
        const div = document.createElement("div")
        document.body.appendChild(div)
        div.id = response.data[i]._id
                
        const h1 = document.createElement('h1')
        h1.textContent = response.data[i].title
        div.appendChild(h1)

        const h1Description = document.createElement('h1')
        h1Description.textContent = response.data[i].description
        div.appendChild(h1Description)

        var x = document.createElement("IMG");
        x.setAttribute("src", response.data[i].imgUrl);
        x.setAttribute("width", "auto");
        x.setAttribute("height", "400");
        x.setAttribute("alt", "Todo Image");
        div.appendChild(x);}

        // const deleteTodo = document.createElement("button")
        // deleteTodo.textContent = "Delete"
        // div.appendChild(deleteTodo)
        
    })
    .catch(error=> console.log(error))
})
// }

