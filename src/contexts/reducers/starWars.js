import * as CONSTANTS from '../constants/starWars';

export const initialStarWarsState = {
    isLoading: false,
    people: []
}

export const starWarsReducer = (state, action) => {
    switch (action.type) {
        case CONSTANTS.SET_LOADING:
            return { ...state, isLoading: action.isLoading };
        case CONSTANTS.SET_PEOPLE:
            return { ...state, people: action.people }
        default:
            return state
    }
}