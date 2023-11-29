export default class LocalStorageUtil{
    static #keyGoods = "products"
    static getProducts(){
        const result = localStorage.getItem(this.#keyGoods)
        if(result){
            return JSON.parse(result);
        }
        return [];
    }
    static productIsExist(id){
        const products = this.getProducts();
        const isExist = products.find((el)=> el.id === id)
        return isExist?true:false;
    }
    static addProduct(id, count){
        const products = this.getProducts();
        const isExist = products.find((el)=> el.id === id)
        if(!isExist){
            products.push({id, count})
            localStorage.setItem(this.#keyGoods, JSON.stringify(products));
        }
    }
    static setProductCount(id, value){
        const products = this.getProducts();
        const product = products.find((el)=> el.id === id);
        if(product){
            product.count = value
            localStorage.setItem(this.#keyGoods, JSON.stringify(products));
        }
    }
    static removeProduct(id){
        const products = this.getProducts();
        const productsWithoutElement = products.filter(el=> el.id !== id)
        localStorage.setItem(this.#keyGoods, JSON.stringify(productsWithoutElement));
    }
}

