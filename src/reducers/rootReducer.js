import { combineReducers } from 'redux'
import movies from './movies';
import newMovie from './NewMovie'

export default combineReducers({
    movies,
    newMovie
});