import Page from "../../../core/page/Page";
import "./products.css"
import ProductsService from "../../fakeapi/ProductsService";
import ProductsList from "./components/productsList/ProductsList";
export default class ProductsPage extends Page{
    constructor (){
        super();
        this.setDocTitle("Продукты")
        this.setPageTitle("Все продукты")
    }

    render(){
        const productsData = ProductsService.getAll();
        const productsList = new ProductsList({productsData});
        this.rootPage.append(productsList.create())
        return this.rootPage;
    }
}