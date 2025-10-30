// Import necessary hooks and functions from React.
import { useContext, useReducer, createContext } from "react";
  // Import the reducer and the initial state.
import stateReducer, { initialState } from "../store.js";
// Create a context to hold the global state of the application
// We will call this global state the "store" to avoid confusion while using local states
const StateContext = createContext()

// Define a provider component that encapsulates the store and warps it in a context provider to 
// broadcast the information throught all the app pages and components.
export function StateProvider({ children }) {
    // Initialize reducer with the initial state.
    const [state, dispatch] = useReducer(stateReducer, initialState())
    // Provide the store and dispatch method to all child components.
    return <StateContext.Provider value={{ state, dispatch }}>
        {children}
    </StateContext.Provider>
}

// Custom hook to access the global state and dispatch function.
export default function useGlobalReducer() {
    const { state, dispatch } = useContext(StateContext)
    return { state, dispatch };
}