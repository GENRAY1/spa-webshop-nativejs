export default class Component{
    constructor(){}

    addParams(element, params){
        for(const [key, value] of Object.entries(params)){
            switch(key){
                case "class":{
                    element.classList.add(value);
                    break;
                }
                case "classList":{
                    for(const className of value){
                        element.classList.add(className);
                    }
                    break;
                }
                case "text":{
                    element.textContent = value;
                    break;
                }
                default:{
                    element[key] = value;
                    break;
                }
            }
        }
    }
    createElement(options){
        if(!options.tag) return undefined;
        const element = document.createElement(options.tag);

        if(options.params){
            this.addParams(element, options.params)
        }
        if(options.childrens && options.childrens.length){
            for(const children of options.childrens){
                element.appendChild(children)
            }
        }
        if(options.components && options.components.length){
            for(const component of options.components){
                if(component instanceof Component){
                    element.appendChild(component.create());
                }
            }
        }
        if(options.parent) options.parent.appendChild(element);

        return element;
    }
    createComponent = (options)=>this.createElement(options)

    
}