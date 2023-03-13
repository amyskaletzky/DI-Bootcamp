import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from '../actions'
    
const Counter = (props) => {
    return (
        <>
            <button type='button' onClick={() => props.increase()}>+</button>
            <p>Counter: {props.c}</p>
            <button type='button' onClick={() => props.decrease()}>-</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        c: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch(increaseCount()),
        decrease: () => dispatch(decreaseCount()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)