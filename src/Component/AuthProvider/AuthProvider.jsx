import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [carts,setCarts]=useState([])
    const [loves,setLoves]=useState([])
    const [isActive, setIsActive] = useState(true)
    const handleIsActive = (value) => {

        setIsActive(value)
    }

    const [type, setType] = useState("")

    const modalTypeSet = (value) => {
        setType(value)

    }

 
    const productInfo = { carts, setCarts, loves, setLoves, isActive, setIsActive, handleIsActive, type, setType,modalTypeSet }


    
    return (
        <AuthContext.Provider  value={productInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;