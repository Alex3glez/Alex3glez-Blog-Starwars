import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import swapiData from "../services/swapi.js";

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
  }, []);
console.log(state);
  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
       
      </p>
    </div>
  );
};
