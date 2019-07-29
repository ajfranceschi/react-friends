// CONSTANTS
import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_PENDING} from "./constants";

// create an initial state
const initialStateSearch = {
    searchField: ''
}

//searchRobots reducer is a function that is going to be used in multiple places
export const searchRobots = (currentState = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // return Object.assign({}, currentState, {searchField: action.payload})
            return {...currentState, searchField: action.payload};
        default:
            return currentState;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, initialStateRobots, {
                isPending: true
            });
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, initialStateRobots, {
                isPending: false,
                robots: action.payload
            })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, initialStateRobots, {
                error: action.payload,
                isPending: false
            })
        default:
            return initialStateRobots;
    }
}