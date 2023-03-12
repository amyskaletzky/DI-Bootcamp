import { connect } from 'react-redux';

const MovieDetails = (props) => {
    const values = props.details.selectMovieReducer.value
    console.log(values);
    return (
        <>
            <h1>MovieDetails</h1>
            <div>
                <p>Title: {values.title}</p>
                <p>Release Date: {values.releaseDate}</p>
                <p>Rating: {values.rating}</p>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        details: state
    }
}

export default connect(mapStateToProps)(MovieDetails)

