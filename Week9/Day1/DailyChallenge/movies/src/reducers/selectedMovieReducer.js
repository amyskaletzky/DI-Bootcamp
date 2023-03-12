const initState = {
    value: ''
}

const selectMovieReducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'MOVIE_SELECTED':
            return { ...state, value: action.payload };
        default:
            return { ...state };
    }

}

export default selectMovieReducer