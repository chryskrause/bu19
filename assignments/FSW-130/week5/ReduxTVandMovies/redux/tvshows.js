export function addShow(thing1){
    return{
        type: "ADD_SHOW",
        payload: thing1
    }
}

export function removeShow(thing1){
    return{
        type: "REMOVE_SHOW",
        payload: thing1
    }
}

export default function showReducer(shows = [], action){
    switch(action.type) {
        case "ADD_SHOW":
            return [...shows, action.payload]
        case "REMOVE_SHOW": {
            const updatedArr1 = shows.filter(thing1 => thing1.toLowerCase() !== 
            action.payload.toLowerCase())
            return updatedArr1
        }
        default:
            return shows
    }    
}