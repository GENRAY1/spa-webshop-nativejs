import Component from "../../../core/component/Component";
export default class Footer extends Component{
    constructor(props){
        super()
        this.props = props;
    }
    create(){
        return this.createComponent({
            tag:"footer",
            params:{
                class:"footer",
            },
            childrens:[
                this.createElement({tag:"div", params:{class:"container"}})
            ]
        });
    }
}