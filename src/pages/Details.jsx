
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import swapiData from "../services/swapi";
import { useEffect } from "react";



function Details() {
  
  const { state, dispatch } = useGlobalReducer();
  const { category, id } = useParams();
  
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



  const targetData = state[category].find(item => item.uid == id);
  console.log(targetData.properties.name)

  const character = {
    name: "targetData.properties.name",
    description: "Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy's greatest mysteries. Haunted by Ben Solo's fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy's pleas for help. But his solitude would be interrupted – and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.",
    imageUrl: "/path/to/your/luke-skywalker-image.jpg" 
  };

  
  const dataGrid = [
    { title: "APPEARANCES", items: ["Star Wars: Episode III Revenge of the Sith", "Star Wars: Episode IV A New Hope", "Star Wars: Episode V The Empire Strikes Back", "Star Wars: Episode VI Return of the Jedi", "Star Wars: Episode VII The Force Awakens", "Star Wars: Episode VIII The Last Jedi", "Star Wars Rebels"] },
    { title: "AFFILIATIONS", items: ["Rebel Alliance", "Jedi Order"] },
    { title: "LOCATIONS", items: ["Polis Massa", "Lars Moisture Farm", "Tatooine"] },
    { title: "GENDER", items: ["Male"] },
    { title: "DIMENSIONS", items: ["Height: 1.72m"] },
    { title: "SPECIES", items: ["Human"] },
    { title: "VEHICLES", items: ["T-16 Skyhopper", "X-34 Landspeeder", "X-wing Starfighter", "Snowspeeder"] },
    { title: "WEAPONS", items: ["Lightsaber", "Blaster Pistol", "Luke Skywalker's Lightsaber (Green Blade)", "Anakin, Luke, and Rey's Lightsaber"] },
    { title: "TOOL", items: ["Bacta Tank", "Moisture Vaporator"] }
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