import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import swapiData from "../services/swapi";
import { useEffect, useState } from "react";
import { dataGrid } from "../services/detailsDataGrid";

function Details() {
  const { state, dispatch } = useGlobalReducer();
  const { category, id } = useParams();
  const [targetData, setTargetData] = useState({});

  useEffect(() => {
    const verifyLocalStoreData = async (data, setData) => {
      try {
        const localStoreData = localStorage.getItem(data);
        if (!localStoreData) {
          await swapiData(data);
          console.log(`se esta haciendoel fetch de ${data}`);
        }
        const parsedData = JSON.parse(localStorage.getItem(data));
        dispatch({ type: setData, payload: parsedData });

        console.log(parsedData);
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

  useEffect(() => {
    if (state[category].length > 0) {
      const data = state[category].find((item) => item.uid == id);

      console.log(data);
      setTargetData(data);
    }
  }, [state, category, id]);

  if (!targetData || !targetData.properties) {
    return (
      <div className="container-fluid bg-dark text-light min-vh-100 p-4 p-md-5">
        <h1 className="text-light">Loading...</h1>
      </div>
    );
  }
  const character = {
    name: targetData.properties.name || targetData.properties.title || "",
    description: targetData.description || "",
    imageUrl: `/assets/img/${category}/${id}.jpg`,
  };

  const DataColumn = ({ title, items }) => (
    <div className="col-lg-4 col-md-6 mb-4">
      <h6 className="text-uppercase" style={{ color: "#888" }}>
        {title}
      </h6>

      <div className="row g-2">
        {items.map((item, index) => (
          <div key={index} className="col-6">
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 p-4 p-md-5">
      <div className="row">
        <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
          <img
            src={character.imageUrl}
            alt={character.name}
            className="img-fluid w-100 rounded"
            onError={(e) => (e.target.src = "")}
          />

          {category == "films" && (
            <div className="col mt-3">
              <h6 className="text-uppercase" style={{ color: "#888" }}>
                {"OPENING CRAWL"}
              </h6>

              <div className="row g-2">
                <div key={"OPENING CRAWL"} className="col">
                  {targetData.properties.opening_crawl}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="col-lg-7 col-md-12">
          <div className="mb-4">
            <h1 className="display-4 fw-bold">{character.name}</h1>
            <p className="lead" style={{ color: "#ccc" }}>
              {character.description}
            </p>
          </div>

          <hr
            className="my-4"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          />

          <div className="row">
            {dataGrid(category, targetData, state).map((category) => (
              <DataColumn
                key={category.title}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
