import LocalStorageUtil from "../../../../../core/utils/LocalStorageUtil";
import Component from "../../../../../core/component/Component";
export default class ProductsBtn extends Component{
    constructor(props){
        super()
        this.props = props;
        this.defaultClass = "products__btn";
        this.activeClass = "products__btn--active";
        this.removeProductText = "Удалить из корзины" ;
        this.addProductText = "Добавить в корзину";
    }
    manageShoppingCartHandler(e){
        const id = this.props.id;
        const isExist = LocalStorageUtil.productIsExist(id);
        if(isExist){
            LocalStorageUtil.removeProduct(id);
            e.target.classList.remove(this.activeClass);
            e.target.textContent = this.addProductText;
        }
        else{
            LocalStorageUtil.addProduct(id, 1);
            e.target.classList.add(this.activeClass);
            e.target.textContent = this.removeProductText;
        }
    }
    create(){
        const {id} = this.props;
        const isExist = LocalStorageUtil.productIsExist(id);

        const productsButton = this.createComponent({
            tag:"button",
            params:{
                text: isExist?this.removeProductText:this.addProductText,
                classList: isExist?[this.defaultClass, this.activeClass]:[this.defaultClass]
            }
        });
        productsButton.addEventListener("click", (e) => this.manageShoppingCartHandler(e));
        return productsButton;
    }
}