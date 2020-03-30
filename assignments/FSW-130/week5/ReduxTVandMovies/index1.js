import store from "./redux/index.js"
import {addMovie} from ".redux/movies"
import {removeMovie} from ".redux/movies"
import {addShow} from ".redux/tvshows"
import {removeShow} from ".redux/tvshows"

store.dispatch(addMovie("Gone With The Wind"))
store.dispatch(addShow("WalkingDead"))
