import {action, decorate, observable} from "mobx";
import {default as UUID} from "node-uuid";
import {isValidElement} from "react";

export class Category {
    id = UUID.v4;
    name;
    image = "default.png";
    favorite = false;

    constructor(name, favorite=false, image="default.png", id=UUID.v4) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.favorite = favorite;
    }

    setFavorite (isFavorite) {
        this.favorite = isFavorite;
    }
}

decorate(Category, {
    name: observable,
    image: observable,
    favorite: observable,

    setFavorite: action
});