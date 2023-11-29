import Component from "../../../core/component/Component";
export default class Main extends Component{
    constructor(props){
        super()
        this.props = props;
    }
    create(){
        return this.createComponent({
            tag:"main",
            params:{
                class:"page",
                id:"page"
            }

        });
    }
}