export const initialState=()=>{
  return{
    people:[],
    planets:[],
    starships:[]
  }
}

export default function stateReducer(state, action = {}) {
  switch(action.type){
    case 'setPeople':
      return { ...state, people: action.payload };

    case 'setPlanets':
      return { ...state, planets: action.payload };

    case 'setStarships':
      return { ...state, starships: action.payload };

    default:
      throw state
  }    
}
