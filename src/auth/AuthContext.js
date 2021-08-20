import React, { createContext, useCallback, useState } from "react";
import { fetchSinToken } from "../helpers/fetch";


export const AuthContext = createContext();


const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
};

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(initialState);

    const login = async (email, password) => {

        const resp = await fetchSinToken('login',{ email, password }, 'POST');

        console.log(resp);

    }

    const regiter = (nombre, email, password) => {

    }

    const verificaToken = useCallback(() => {


    }, []);

    const logout = () => {

    }

    return (
        <AuthContext.Provider value={{
            login,
            regiter,
            verificaToken,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
