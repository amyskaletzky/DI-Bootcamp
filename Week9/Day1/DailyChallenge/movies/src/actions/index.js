export const MOVIE_SELECTED = 'MOVIE_SELECTED'

export const selectMovie = (movieTitle) => {
    return {
        type: MOVIE_SELECTED,
        payload: movieTitle
    }
}