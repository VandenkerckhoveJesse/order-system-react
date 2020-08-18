import React from 'react';
import {createCategoryStore} from "../stores/CategoryStore";
import {useLocalStore} from "mobx-react-lite";

export const CategoryContext = React.createContext(null);

export const CategoryProvider = ({children}) => {
    const categoryStore = useLocalStore(createCategoryStore);
    return <CategoryContext.Provider value={categoryStore}>
        {children}
    </CategoryContext.Provider>
};