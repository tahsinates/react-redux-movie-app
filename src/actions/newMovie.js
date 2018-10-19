import {API_BASE} from '../config/env';
import axios from 'axios';

export const NEW_MOVIE_FULFILLED = "NEW_MOVIE_FULFILLED";
export const NEW_MOVIE_REJECTED = "NEW_MOVIE_REJECTED";
export const NEW_MOVIE_PENDING = "NEW_MOVIE_PENDING";

export const FETCH_MOVIE_FULFILLED = "FETCH_MOVIE_FULFILLED";
export const FETCH_MOVIE_REJECTED = "FETCH_MOVIE_REJECTED";
export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";

export const UPDATE_MOVIE_FULFILLED = "UPDATE_MOVIE_FULFILLED";
export const UPDATE_MOVIE_REJECTED = "UPDATE_MOVIE_REJECTED";
export const UPDATE_MOVIE_PENDING = "UPDATE_MOVIE_PENDING";

export function onNewMovieSubmit( {title, cover}){
    return dispatch => {
        dispatch({
                type: "NEW_MOVIE",  // redux-promise-middleware yardimi ile yukardaki const degiskenlerin atamasi yapildi -> NEW_MOVIE_XXXXX
                payload : axios.post(`${API_BASE}/movies`,{
                    title,
                    cover
                })
                .then(result => result.data.movies)
        }) 
    }
};

export function fetchMovie(id){
    return dispatch => {
        dispatch({
                type: "FETCH_MOVIE",  // redux-promise-middleware yardimi ile yukardaki const degiskenlerin atamasi yapildi -> NEW_MOVIE_XXXXX
                payload : axios.get(`${API_BASE}/movies/${id}`)
                .then(result => result.data)
        }) 
    }
};

export function onUpdateMovieSubmit( { _id, title, cover}){
    return dispatch => {
        dispatch({
                type: "UPDATE_MOVIE",  // redux-promise-middleware yardimi ile yukardaki const degiskenlerin atamasi yapildi -> NEW_MOVIE_XXXXX
                payload : axios.put(`${API_BASE}/movies/${_id}`,{
                    title,
                    cover
                })
                .then(result => result.data.movies)
        }) 
    }
};