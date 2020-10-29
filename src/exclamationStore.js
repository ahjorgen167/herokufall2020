// import React, { createContext, useContext, useReducer } from 'react';

// const StoreContext = createContext();
// const initialState = 1;

// const reducer = (state, action) => {
//     if (action.type === 'CLICK') {
//         return state + 1;
//     }
//     return state;
// }

// export const StoreProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <StoreContext.Provider value={{ state, dispatch }}>
//             {children}
//         </StoreContext.Provider>
//     )
// }

// export const useStore = () => useContext(StoreContext);