import "./page.css";
export default class Page{
    constructor(){
        this.rootPage = document.createElement("div");
        this.rootPage.className="page__container";
    } 
    setDocTitle(docTitle){
        document.title = docTitle;
    }
    setPageTitle(pageTitle){
        const h1 = document.createElement("h1");
        h1.className = "page__title"
        h1.textContent = pageTitle;
        this.rootPage.append(h1);
    }
    
    async render(){
        return this.rootPage;
    }

}