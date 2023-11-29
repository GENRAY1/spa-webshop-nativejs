import Component from "../../../../../core/component/Component";
import ProductsBtn from "../productsBtn/ProductsBtn";
export default class ProductsItem extends Component{
    constructor(props){
        super()
        this.props = props;
        this.productImgPath = "/images/products/";
    }
    create(){
        const {id,name,title,price,discount,imgSrc} = this.props.product;
        const priceWithoutDiscount = price + (price * discount / 100);
        let priceOldClasses = ["products__price-old"];
        if(discount > 0){
            priceOldClasses.push("products__price-old--display")
        }

        const imgContainer = this.createElement({
            tag:"div",
            params:{
                class:"products__img-container"
            },
            childrens:[
                this.createElement({
                    tag:"img", 
                    params:{
                        class:"products__img",
                        src:this.productImgPath + imgSrc,
                    }
                }),
            ]
        });
        const textContainer = this.createElement({
            tag:"div",
            params:{
                class:"products__text-container"
            },
            childrens:[
                this.createElement({
                    tag:"span", 
                    params:{
                        class:"products__name",
                        text:name?name:"-",
                    }
                }),
                this.createElement({
                    tag:"span", 
                    params:{
                        class:"products__title",
                        text:title?title:"-",
                    }
                })
            ]
        })

        const priceContainer = this.createElement({
            tag:"div",
            params:{
                class:"products__price-container"
            },
            childrens:[
                this.createElement({
                    tag:"span", 
                    params:{
                        class:"products__price",
                        text:`${price} ₽`,
                    }
                }),
                this.createElement({
                    tag:"span", 
                    params:{
                        classList:priceOldClasses,
                        text:`${Math.round(priceWithoutDiscount)} ₽`,
                    } 
                })
            ]
        })
        const btn = new ProductsBtn({id})
        return this.createComponent({
            tag:"li",
            params:{
                class:"products__item"
            },
            childrens:[imgContainer, textContainer, priceContainer],
            components:[btn]
        })
    }
}