import { createContext, useContext, useReducer } from 'react';
// import combineReducers from 'react-combine-reducers' // Can use this one if there are multiple reducers
import { starWarsReducer, initialStarWarsState } from './reducers/starWars';

const AppContext = createContext();

export const useStore = () => useContext(AppContext);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(starWarsReducer, initialStarWarsState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            { children }
        </AppContext.Provider>
    )
}