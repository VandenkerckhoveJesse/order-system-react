import React from 'react';
import OrderSystemStore from "../stores/OrderSystemStore";
import {useLocalStore} from "mobx-react-lite";

export const OrderSystemContext = React.createContext(null);

export const CategoryProvider = ({children}) => {
    const categoryStore = useLocalStore(OrderSystemStore);
    return <OrderSystemContext.Provider value={categoryStore}>
        {children}
    </OrderSystemContext.Provider>
};