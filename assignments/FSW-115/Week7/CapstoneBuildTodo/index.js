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

            const customTodo = document.createElement("h1")
            customTodo.textContent = response.data.title
            document.body.appendChild(customTodo)

            const description1 = document.createElement("h1")
            description1.textContent = response.data.description
            document.body.appendChild(description1)

            var image1 = document.createElement("IMG");
            image1.setAttribute("src", response.data.imgUrl);
            image1.setAttribute("width", "auto");
            image1.setAttribute("height", "400");
            image1.setAttribute("alt", "Todo");
            document.body.appendChild(image1)
        }
            )
        .catch(error => console.log(error))
})


// const deleteAPI = document.getElementById("deleteAPIs")



//     const deleteThis = {
//         id: deleteAPI.id.value
//     }

//     const deleteURL = "https://api.vschool.io/CKrause/todo/"+whatwhat

// axios.delete(deleteURL)
//     .then(res => console.log(res.data))
//     .catch(err => console.log(err))
// })
const deleteAPI1 = document.getElementById("deleteAPIs")

deleteAPI1.addEventListener("submit", function(event){
    event.preventDefault()

axios.get("https://api.vschool.io/CKrause/todo/").then(function(response) {
    const todoList = response.data;
})

const deleteAPI = function(singleTodo){
    axios.delete("https://api.vschool.io/CKrause/todo/" + singleTodo._id).then(function(response){
        alert("Deleted!")
    }, function(response){
        alert("Error with deletion!")
    })
}
})


    var x = document.createElement("HEADER");
    x.setAttribute("id", "myHeader");
    document.body.appendChild(x);
  
    var y = document.createElement("H3"); 
    var t = document.createTextNode("Click here to see one of my Todos!");
    y.appendChild(t);
  
    document.getElementById("myHeader").appendChild(y);


    // var btn = document.createElement("BUTTON");
    // document.body.appendChild(btn).innerHTML = "Click here"

    // btn.addEventListener("submit", function(event){
    // event.preventDefault()

    axios.get("https://api.vschool.io/CKrause/todo/5e2f82aa7ff9e674a467b51e")
    .then(response => {
        console.log(response)
               
        const h1 = document.createElement('h1')
        h1.textContent = response.data.title
        document.body.appendChild(h1)

        const h1Description = document.createElement('h1')
        h1Description.textContent = response.data.description
        document.body.appendChild(h1Description)

        var x = document.createElement("IMG");
        x.setAttribute("src", "https://img.memecdn.com/web-development_o_618260.webp");
        x.setAttribute("width", "auto");
        x.setAttribute("height", "400");
        x.setAttribute("alt", "Web Dev Reality");
        document.body.appendChild(x);
        
    })
    .catch(error=> console.log(error))
// })
// }

