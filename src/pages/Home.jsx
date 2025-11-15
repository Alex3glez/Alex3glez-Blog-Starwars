import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import swapiData from "../services/swapi.js";
import CardList from "../components/CardList.jsx";

export const Home = () => {
  const { state, dispatch } = useGlobalReducer();

  useEffect(() => {
    const verifyLocalStoreData = async (data, setData) => {
      try {
        const localStoreData = localStorage.getItem(data);
        if (!localStoreData) {
          await swapiData(data);
          console.log(`se esta haciendoel fetch de ${data}`);
          const parsedData = JSON.parse(localStorage.getItem(data));
          dispatch({ type: setData, payload: parsedData });
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

  return (
    <div className="text-center mt-5">
      <div id="gente">
        <CardList id="people" items={state.people}></CardList>
      </div>
      <div id="planetas">
        <CardList id="planets" items={state.planets}></CardList>
      </div>
      <div id="naves">
        <CardList id="starships" items={state.starships}></CardList>
      </div>
      <div id="vehiculos">
        <CardList id="vehicles" items={state.vehicles}></CardList>
      </div>

      <div id="especies">
        <CardList id="species" items={state.species}></CardList>
      </div>

      <div id="peliculas">
        <CardList id="films" items={state.films}></CardList>
      </div>
    </div>
  );
};
