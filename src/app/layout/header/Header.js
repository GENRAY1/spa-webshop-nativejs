import Component from "../../../core/component/Component";

export default class Header extends Component{
    constructor(props){
        super()
        this.props = props;
    }
    create(){
        let logo, navigate, shoppingBtn;
        const headerComponent = this.createComponent({
            tag:"header",
            params:{class:"header"},
            childrens:[
                this.createElement({
                    tag:"div", 
                    params:{class:"container"},
                    childrens:[
                        this.createElement({
                            tag:"div", 
                            params:{class:"header__wrapper"},
                            components:[logo, navigate, shoppingBtn]
                        })
                    ]
                }),

            ]
        })

        return headerComponent;
    }
}

