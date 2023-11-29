import Page from "../../../core/page/Page";


export default class NotFoundPage extends Page{
    constructor (){
        super();
        this.setDocTitle("Ошибка")
        this.setPageTitle("Такой страницы не существует!")
    }

    render(){
        return this.rootPage;
    }
}