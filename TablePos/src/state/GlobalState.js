import React, {createContext, useReducer} from 'react';
import countReducer from '../reducers/globalReducer';
 
const initialState = {
    counter: 0
}
 
export const GlobalContext = createContext(initialState);
 
export default GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(countReducer, initialState);
 
    return(
        
            {children}
        
    )
}