import { products } from "./constans/products"
import  ServiceAPI from "./ServiceAPI"

export default class ProductsService extends ServiceAPI{
    static #products = this.getCopy(products)
    static getAll(){
        return this.#products;
    }
    static getById(id){
        return this.#products.find((el)=> el.id === id);
    }
    static getByCategoryId(сategoryId){
        return this.#products.filter((el)=> el.сategoryId === сategoryId);
    }
}