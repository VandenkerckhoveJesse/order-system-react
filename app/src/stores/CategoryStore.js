import {observable, action, async} from "mobx";
import {} from "./api.js"

class Category {
    id = Math.random();
    @observable name;
    @observable image = "default.png";
    @observable favorite = false;
    @observable products = [];

    @action setFavorite () {

    }

    @action addProduct() {

    }

    @action getProduct() {

    }

    @action removeProduct() {

    }
}

class Product {
    id = Math.random();
    @observable name;
    @observable favorite = false;
    @observable image = "default.png";
    @observable price;

    @action setFavorite() {

    }
}

export function createCategoryStore(){
    return {
        categories: [],
        addCategory() {

        },
        removeCategory() {

        },
        getCategory() {

        },
        save() {
            
        }
    }
}