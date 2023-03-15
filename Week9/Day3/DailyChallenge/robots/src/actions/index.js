export const ADD = 'ADD'
export const FILTER = 'FILTER'

export const getRobots = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: ADD,
                payload: data
            })
        })
}

export const filterBy = (value) => {
    return {
        type: FILTER,
        payload: value
    }
}

