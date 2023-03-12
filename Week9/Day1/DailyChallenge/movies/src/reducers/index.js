import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import selectMovieReducer from './selectedMovieReducer';

export const rootReducer = combineReducers({
    moviesReducer, selectMovieReducer
})
