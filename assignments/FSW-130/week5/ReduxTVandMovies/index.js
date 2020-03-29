import store from "./redux/index"
import {addMovie} from ".redux/movies"
import {removeMovie} from ".redux/movies"
import {addShow} from ".redux/tvshows"
import {removeShow} from ".redux/tvshows"

store.dispatch(addMovie("Gone With The Wind"))
