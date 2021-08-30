import React, { createContext, useReducer } from "react";
import { chatReducer } from "./chatReducer";


export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, //UID del usuario al que yo quiero enviar mensaje
    usuarios: [], //todos los usuarios de la bd
    mensajes: [],   //El chat seleccionado
}

export const ChatProvider = ({ children }) => {

    const [chatState, dispatch] = useReducer(chatReducer, initialState);

    return (
        <ChatContext.Provider value ={{
            chatState,
            dispatch
        }}>
            { children }
        </ChatContext.Provider>
    )
}
