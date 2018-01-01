import {
    UPDATE_QUERY,
    SEARCH
} from '../actions/types'

const INITIAL_STATE = {
    results: [],
    query: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_QUERY:
            return {
                ...state,
                query: action.payload
            }
        case SEARCH:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state
    }
}