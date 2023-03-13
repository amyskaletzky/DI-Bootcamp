import { connect } from 'react-redux';
import { selectMovie } from '../actions';
import MovieDetails from './MovieDetails';

const MovieList = (props) => {

    return (
        <>
            <section id='movie-list' style={{ display: 'inline-block', width: '50%' }}>
                <h1>Movie List</h1>
                {props.movies.map((movie, index) => {
                    return (
                        <>
                            <div key={index}>
                                <p>{movie.title}</p>
                                <button type='button' onClick={() => props.getDetails(movie)}>Details</button>
                            </div>
                        </>
                    )
                })}

            </section>

            <section id='movie-details' style={{ display: 'inline-block', width: '50%' }}>
                <MovieDetails />
            </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.moviesReducer.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetails: (movieTitle) => dispatch(selectMovie(movieTitle))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)