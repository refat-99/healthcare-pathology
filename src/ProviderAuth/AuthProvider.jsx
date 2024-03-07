import React, { createContext } from 'react';


// create context 1
  export const authContext = createContext(null);

const AuthProvider = ({children}) => {
        const gar = "Rifat shah";

    const info = {
        gar
    }
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;