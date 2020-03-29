const redux = require("redux")
const {combineReducers, createStore} = redux
import movieReducer from "./movies"
import showReducer from "./tvshows"

const rootReducer = combineReducers({
    allMovies: movieReducer,
    tvshows: showReducer,
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store