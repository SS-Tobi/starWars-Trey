import { Route, Routes } from 'react-router-dom';
import { StarWars, StarWarsDetails } from './pages/starWars';

const AppRoutes = () => {
    console.log("Routes")
    return (
        <Routes>
            <Route
                path='/'
                element={ <StarWars /> }
            />
            <Route
                path='/starwars/:name'
                element={ <StarWarsDetails /> }
            />
        </Routes>
    )
}

export default AppRoutes;