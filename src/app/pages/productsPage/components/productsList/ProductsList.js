import Component from "../../../../../core/component/Component";
import ProductsItem from "../productsItem/ProductsItem";
export default class ProductsList extends Component{
    constructor(props){
        super()
        this.props = props;
    }

    create(){
        const productsData = this.props.productsData;
        const productsList = this.createElement({
            tag:"ul",
            params:{
                class:"products__list"
            }
        });
        productsData.forEach((product) => {
            const productsItem = new ProductsItem({product});
            productsList.appendChild(productsItem.create());
        });
        return productsList;
    }
}