import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {

    useEffect(() => {
        const userStorage = localStorage.getItem('user')
        if(userStorage) {
            setUser(JSON.parse(userStorage))
        } else {
            setUser('')
        }
    }, [])
    
    const [user, setUser] = useState('')

    return (
        <AuthContext.Provider value={{user, setUser}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)