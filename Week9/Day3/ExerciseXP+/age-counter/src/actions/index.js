export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementCount = () => {
    return {
        type: INCREMENT
    }
}

export const decrementCount = () => {
    return {
        type: DECREMENT
    }
}
