const axios = require('axios');

axios.get("https://api.vschool.io/CKrause/todo/5e2f82aa7ff9e674a467b51e")
    .then(response => {
        for (let i = 0; i < response.data.length; i++){
            const h1 = document.createElement("h1")
            h1.textContent = response.data
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))

    (response => {
        for (let i = 0; i < response.data.length; i++){
            const h1 = document.createElement("h1")
            h1.textContent = response.data
            document.body.appendChild(h1)
        }
    })

// .then(response => console.log(response.data))