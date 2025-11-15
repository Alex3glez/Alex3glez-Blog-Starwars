export const initialState = () => {
  return {
    people: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    films: [],
    favorites: [],
  };
};

export default function stateReducer(state, action = {}) {
  switch (action.type) {
    case "setPeople":
      return { ...state, people: action.payload };

    case "setPlanets":
      return { ...state, planets: action.payload };

    case "setStarships":
      return { ...state, starships: action.payload };

    case "setFilms":
      return { ...state, films: action.payload };

    case "setSpecies":
      return { ...state, species: action.payload };

    case "setVehicles":
      return { ...state, vehicles: action.payload };

     case "setFavorites":
      return { ...state, favorites: action.payload }; 

    default:
      return state;
  }
}
