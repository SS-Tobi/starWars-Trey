import { useParams } from "react-router-dom";
import { useStore } from "../../contexts";

const StarWarsDetails = () => {
  const { state } = useStore();
  const { people } = state;
  const { name } = useParams();

  return (
    <div>
      <h4>Name: {name}</h4>
      <h4>Height: {people.find((item) => item.name === name).height}</h4>
    </div>
  );
};

export default StarWarsDetails;
