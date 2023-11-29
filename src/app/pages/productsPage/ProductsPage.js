import Page from "../../../core/page/Page";

export default class ProductsPage extends Page{
    constructor (){
        super();
        this.setDocTitle("Продукты")
        this.setPageTitle("Все продукты")
    }

    render(){
        return this.rootPage;
    }
}