import { createContext, useState } from "react";

export const DevicesContext = createContext({});

export function DevicesContextProvider({children}){
    const [devices, setDevices] = useState([]);
    return (
        <DevicesContext.Provider value={{devices, setDevices}}>
            {children}
        </DevicesContext.Provider>
    );
}