import { connect } from "react-redux";
import { incrementCount, decrementCount } from '../actions'

const Counter = (props) => {

    const incrementOdd = () => {
        if (props.count % 2 != 0) props.increment()
    }
    const incrementTimeout = () => {
        setTimeout(() => {
            props.increment()
        }, 2000);
    }
    return (
        <>
            <p>Clicked:{props.count}</p>
            <button onClick={() => props.decrement()}>-</button>
            <button onClick={() => props.increment()}>+</button>
            <button onClick={() => incrementOdd()}>Increment if Odd</button>
            <button onClick={() => incrementTimeout()}>Increment async</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter)