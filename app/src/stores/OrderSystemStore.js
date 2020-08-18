import {observable, action, computed, decorate} from "mobx";
import {fetchAllData} from "../api.js"
import {Category} from "../models/Category";
import {Product} from "../models/Product";
import {postAllData} from "../api";

class OrderSystemStore {
    constructor() {
        this.categories = [];
        this.products = [];
    }

    addCategory(category) {
        this.categories = [...this.categories, category];
    }
    removeCategory(id) {
        this.categories = this.categories.filter(category => category.id !== id);
    }
    getCategory(id) {
        return this.categories.find(category => category.id === id);
    }

    addProduct(product) {
        this.products = [...this.products, product];
    }
    removeProduct(id) {
        this.products = this.products.filter(product => product.id === id);
    }

    getAllData() {
        const data = fetchAllData();
        const receivedCategories = data.categories;
        const receivedProducts = data.products;
        this.categories = receivedCategories.map(category => new Category(
            category.name,
            category.favorite,
            category.image,
            category.id
        ));
        this.products = receivedProducts.map(product => new Product(
            product.name,
            product.favorite,
            product.image,
            product.id
        ));
    }

    saveAllData() {
        postAllData();
    }
}

decorate(OrderSystemStore, {
    categories: observable,
    products: observable,

    addCategory: action,
    removeCategory: action,
    getCategory: computed,

    addProduct: action,
    removeProduct: action,

    getAllData: action
});

export default new OrderSystemStore();
