import Component from "../component/Component";

export default class Layout{
    constructor(rootElement){
        this.rootElement = rootElement;
    }

    render(...components){
        components.forEach(element => {
            if(element instanceof Component){
                this.rootElement.appendChild(element.create())
            }
        });
    }
}