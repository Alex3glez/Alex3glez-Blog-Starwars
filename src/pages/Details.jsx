
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import swapiData from "../services/swapi";
import { useEffect, useState } from "react";



function Details() {
  
  const { state, dispatch } = useGlobalReducer();
  const { category, id } = useParams();
  const [targetData, setTargetData]= useState({})
  
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

          console.log(parsedData)
        
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
    if (state.people.length > 0) {
      const data = state[category].find(item => item.uid == id); 

      console.log(data)
      setTargetData(data)
    }
  }, [state, category, id]) 
  
if (!targetData || !targetData.properties) {

    return (

      <div className="container-fluid bg-dark text-light min-vh-100 p-4 p-md-5">

        <h1 className="text-light">Loading...</h1>

      </div>

    );

  }
   const character = {
    name: targetData.properties.name||"",
    description:  targetData.description||"",
    imageUrl: `/assets/img/${category}/${id}.jpg`
  }; 


  const planetId= targetData.properties.homeworld.split("planets/")[1];
  const vehicleId= targetData.properties.vehicles.map(vehicle=> vehicle.split("vehicles/")[1])
  const starshipsId= targetData.properties.starships.map(starship=> starship.split("starships/")[1])
  const filmsId= targetData.properties.films.map(film=> film.split("films/")[1])
  
  
  const dataGrid = [
    { title: "GENDER", items: [targetData.properties.gender] },
    { title: "MASS", items: [targetData.properties.mass] },
    { title: "HEIGHT", items: [targetData.properties.height] },
    { title: "HOMEWORLD", items: [state.planets.find(planets=>planets.uid==planetId).properties.name, <img 
            src={`/assets/img/planets/${planetId}.jpg`} 
            alt={`img from ${state.planets.find(planets=>planets.uid==planetId).properties.name} `} 
            className="img-fluid w-100 rounded" 
            
            onError={e => e.target.src = ''}
          />] },
    { title: "VEHICLES", items: vehicleId.map(id=>{ state.vehicles.find(vehicles=>vehicles.uid==id).properties.name, <img 
            src={`/assets/img/vehicles/${id}.jpg`} 
            alt={`img from ${state.vehicles.find(vehicles=>vehicles.uid==id).properties.name} `} 
            className="img-fluid w-100 rounded" 
            
            onError={e => e.target.src = ''}
          />}) },
    { title: "FILMS", items: filmsId.map(id=>{ state.films.find(film=>film.uid==id).properties.name, <img 
            src={`/assets/img/films/${id}.jpg`} 
            alt={`img from ${state.films.find(film=>film.uid==id).properties.name} `} 
            className="img-fluid w-100 rounded" 
            
            onError={e => e.target.src = ''}
          />}) },
    { title: "STARSHIPS", items: starshipsId.map(id=>{ state.starships.find(starship=>starship.uid==id).properties.name, <img 
            src={`/assets/img/starships/${id}.jpg`} 
            alt={`img from ${state.starships.find(starship=>starship.uid==id).properties.name} `} 
            className="img-fluid w-100 rounded" 
            
            onError={e => e.target.src = ''}
          />}) }
  ];

  return (
   
    <div className="container-fluid bg-dark text-light min-vh-100 p-4 p-md-5">
      
      <div className="row">
        
        
        <div className="col-lg-5 col-md-12 mb-4 mb-lg-0">
          <img 
            src={character.imageUrl} 
            alt={character.name} 
            className="img-fluid w-100 rounded" 
            
            onError={e => e.target.src = ''}
          />
        </div>

       
        <div className="col-lg-7 col-md-12">
          
        
          <div className="mb-4">
            <h1 className="display-4 fw-bold">{character.name}</h1>
            <p className="lead" style={{ color: '#ccc' }}>{character.description}</p>
          </div>

         
          <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

          
          <div className="row">
            
          
            {dataGrid.map((category) => (
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



const DataColumn = ({ title, items }) => (
  
  <div className="col-lg-4 col-md-6 mb-4">
    
   
    <h6 className="text-uppercase" style={{ color: '#888' }}>{title}</h6>
    
    
    <ul className="list-unstyled mb-0">
      {items.map((item, index) => (
        <li key={index} className="text-light">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default Details;