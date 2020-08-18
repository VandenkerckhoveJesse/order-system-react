import {OrderSystemContext} from "../contexts/OrderSystemContext";
import React from "react";

export const useOrderSystemStore = () => React.useContext(OrderSystemContext);