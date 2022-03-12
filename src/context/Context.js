import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    
    const { data, pending, error, execute } = useFetch();

    return (
        <DataContext.Provider value={{ data, pending, error, execute }}>
            {children}
        </DataContext.Provider>
    )
}
