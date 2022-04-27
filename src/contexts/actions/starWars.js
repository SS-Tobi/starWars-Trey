import * as CONSTANTS from '../constants/starWars';

export const setLoading = (isLoading) => ({
    type: CONSTANTS.SET_LOADING,
    isLoading
})

export const setPeople = (people) => ({
    type: CONSTANTS.SET_PEOPLE,
    people
})