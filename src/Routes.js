import { Route, Routes } from "react-router-dom";
import { StarWars, StarWarsDetails } from "./pages/starWars";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<StarWars />} />
      <Route path="/starwars/:name" element={<StarWarsDetails />} />
    </Routes>
  );
};

export default AppRoutes;
