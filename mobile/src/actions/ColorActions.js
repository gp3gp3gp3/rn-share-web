import {
    UPDATE_QUERY,
    SEARCH
} from './types'
import crayola from '../resources/crayola.json'

export const search = query => {
    const payload = crayola.filter(color => color.name.toLowerCase().includes(query.toLowerCase()))
    return {
        type: SEARCH,
        payload
    }
}

export const updateQuery = payload => {
    return {
        type: UPDATE_QUERY,
        payload
    }
}
