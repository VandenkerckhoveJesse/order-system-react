import {CategoryContext} from "../contexts/CategoryContext";
import React from "react";

export const useCategoryStore = () => React.useContext(CategoryContext);