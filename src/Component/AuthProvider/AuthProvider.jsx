import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [carts,setCarts]=useState([])
    const [loves,setLoves]=useState([])
    
 
    const productInfo = { carts, setCarts, loves, setLoves}


    
    return (
        <AuthContext.Provider  value={productInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;