export const selectMovie = (movieTitle) => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movieTitle
    }
}