const redux = require("redux")

function addName(name){
    return{
        type: "ADD_NAME",
        payload: name
    }
}

function addEmail(email){
    return{
        type: "ADD_EMAIL",
        payload: email
    }
}

function addPhone(phone){
    return{
        type: "ADD_PHONE",
        payload: phone
    }
}

function deleteName(name){
    return{
        type: "DELETE_NAME",
        payload: name
    }
}

function deleteEmail(email){
    return{
        type: "DELETE_EMAIL",
        payload: email
    }
}

function deletePhone(phone){
    return{
        type: "DELETE_PHONE",
        payload: phone
    }
}


const initialState = {
    name: "",
    email: "",
    phone: ""
}

function reducer(state = initialState, action) {
    switch(action.type){
        case "ADD_NAME":
            return{
                ...state,
                name: [...state.name, action.payload]
            }
        case "ADD_EMAIL":
            return{
                ...state,
                email: [...state.email, action.payload]
            }
        case "ADD_PHONE":
            return{
                ...state,
                phone: [...state.phone, action.payload]
                }                            
        case "DELETE_NAME":
            const updatedArr = state.name.filter(thing => thing !== action.payload)
            return{
                ...state,
                name: updatedArr
            }
        case "DELETE_PHONE":
            const updatedArrPhone = state.phone.filter(thing => thing !== action.payload)
            return{
                ...state,
                phone: updatedArrPhone
            }
        case "DELETE_EMAIL":
            const updatedArrEmail = state.email.filter(thing => thing !== action.payload)
            return{
                ...state,
                email: updatedArrEmail
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addName("Tom Jones"))
store.dispatch(addEmail("tommyBoy@tommy.com"))
store.dispatch(addPhone("555-555-8955"))
store.dispatch(addName("Chrystal"))
store.dispatch(addEmail("chrystal@chrystal.com"))
store.dispatch(addPhone("972-654-9872"))
store.dispatch(deleteName("Tom Jones"))
store.dispatch(deletePhone("555-555-8955"))
store.dispatch(deleteEmail("tommyBoy@tommy.com"))
