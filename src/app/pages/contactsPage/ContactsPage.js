import Page from "../../../core/page/Page";


export default class ContactsPage extends Page{
    constructor (){
        super();
        this.setDocTitle("Контакты")
        this.setPageTitle("Контакты")
    }

    render(){
        return this.rootPage;
    }
}