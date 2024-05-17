"use client";

import { createContext, useState } from "react";

export const ListContext = createContext();

export const ListTypeProvider = ({ children }) => {
    const [listType, setListType] = useState(false);

    return (
        <ListContext.Provider value={{ listType, setListType }}>
            {children}
        </ListContext.Provider>
    );
};
