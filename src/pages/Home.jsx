import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import swapiData from "../services/swapi.js";
import CardList from "../components/CardList.jsx";
import { Link } from "react-router-dom";

export const Home = () => {
  const { state, dispatch } = useGlobalReducer();

  useEffect(() => {
    const verifyLocalStoreData = async (data, setData) => {
      try {
        const localStoreData = localStorage.getItem(data);
        if (!localStoreData) {
          await swapiData(data);
          console.log(`se esta haciendoel fetch de ${data}`);
        }
        if (localStoreData) {
          const parsedData = JSON.parse(localStorage.getItem(data));
          dispatch({ type: setData, payload: parsedData });
        }
        
      } catch (error) {
        console.log(error);
      }
    };

    verifyLocalStoreData("people", "setPeople");
    verifyLocalStoreData("planets", "setPlanets");
    verifyLocalStoreData("starships", "setStarships");
    verifyLocalStoreData("films", "setFilms");
    verifyLocalStoreData("species", "setSpecies");
    verifyLocalStoreData("vehicles", "setVehicles");
  }, []);
console.log(state);
  return (
    <div className="text-center mt-5">
      <Link to={"#films"}>Films</Link>
      <CardList id="people" items={state.people}></CardList>
      <CardList id="planets" items={state.planets}></CardList>
      <CardList id="starships" items={state.starships}></CardList>
      <CardList id="vehicles" items={state.vehicles}></CardList>
      <CardList id="species" items={state.species}></CardList>
      <CardList id="films" items={state.films}></CardList>
    </div>
  );
};
