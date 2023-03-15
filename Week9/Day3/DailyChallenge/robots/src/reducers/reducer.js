import { ADD, FILTER } from "../actions"

const initState = {
    robots: [],
    filterArr: []
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case ADD:
            console.log(action.payload);
            return { ...state, robots: action.payload }
        case FILTER:
            state.filterArr = state.robots.filter(robot => {
                let input = action.payload.toLowerCase()
                return robot.name.toLowerCase().includes(input)
            })

            return { ...state, filterArr: [...state.filterArr] }

        default:
            return { ...state }
    }
}