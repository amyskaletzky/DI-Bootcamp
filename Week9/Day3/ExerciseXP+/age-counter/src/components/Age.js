import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions';

const Age = (props) => {
    return (
        <>
            <p>your age: <span>{props.count}</span></p>
            <button onClick={() => props.decrement()}>-</button>
            <button onClick={() => props.increment()}>+</button>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(incrementCount()),
        decrement: () => dispatch(decrementCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Age);
