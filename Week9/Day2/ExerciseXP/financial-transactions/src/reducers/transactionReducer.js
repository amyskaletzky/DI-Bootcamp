import { INSERT, UPDATE, DELETE, UPDATE_INDEX } from '../actions/transactionActions'
import { addToLocalStorage, getFromLocalStorage } from '../helpers/storage'
const STORAGE_KEY = 'transaction'

let initialState = {
    currentIndex: -1,
    list: getFromLocalStorage('transactions')
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case INSERT:
            state.list.push(action.payload)
            addToLocalStorage(STORAGE_KEY, [...state.list])
            return { ...state, list: [...state.list], currentIndex: -1 }
        case UPDATE:
            state.list[state.currentIndex] = action.payload
            addToLocalStorage(STORAGE_KEY, [...state.list])

            return { ...state, currentIndex: -1, list: [...state.list] }
        case DELETE:
            state.list.splice(action.payload, 1)
            addToLocalStorage(STORAGE_KEY, [...state.list])
            return { ...state, currentIndex: -1, list: [...state.list] }
        case UPDATE_INDEX:
            return { ...state, currentIndex: action.payload }
        default:
            return { ...state }
    }
}