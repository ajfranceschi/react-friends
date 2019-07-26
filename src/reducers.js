// CONSTANTS
import {CHANGE_SEARCH_FIELD} from "./constants";

// create an initial state
const initialState = {
    searchField: ''
}

//searchRobots reducer is a function that is going to be used in multiple places
export const searchRobts = (currentState = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, currentState, {searchField: action.payload})
            // return {...currentState, searchField: action.payload};
        default:
            return currentState;
    }
}