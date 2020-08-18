import {action, decorate, observable} from "mobx";
import {default as UUID} from "node-uuid";

export class Product {
    id = UUID.v4;
    name;
    category_id;
    favorite = false;
    image = "default.png";
    price;

    constructor(name, category_id, price, favorite=false, image="default.png", id=UUID.v4) {
        this.id = id;
        this.name = name;
        this.category_id = category_id;
        this.favorite = favorite;
        this.image = image;
        this.price = price;
    }

    setFavorite(isFavorite) {
        this.favorite = isFavorite;
    }
}

decorate(Product, {
    name: observable,
    category_id: observable,
    favorite: observable,
    image: observable,
    price: observable,

    setFavorite: action
});