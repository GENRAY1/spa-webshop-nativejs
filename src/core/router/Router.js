import Page from "../Page/Page";
export default class Router{
    constructor(routes){
        this.routes = routes;
    }

    async route(){
        const potentialPaths = this.routes.urls.map(route =>{
            return{
                route,
                isMath: location.pathname === route.path
            }
        })

        let currentPath = potentialPaths.find(p => p.isMath)
            if(!currentPath){
                currentPath = {
                    route: {path:'/404', renderPage: this.routes.defaultPage},
                    isMath: true
                }
        }

        const page = new currentPath.route.renderPage();
        if(page instanceof Page){
            const pageContainer = document.getElementById("page");
            if(pageContainer.children.length > 0){
                    pageContainer.replaceChildren();
            }
            pageContainer.appendChild(await page.render()) 
        }
    }
    navigateTo(url){
        history.pushState(null, null, url);
        this.route();
    }
    startListening(){
        window.addEventListener("popstate", ()=>this.route())
        document.addEventListener('DOMContentLoaded', () =>this.route())
        document.addEventListener("click", (e)=>{
            if(e.target.className === "nav-link"){
                e.preventDefault();
                this.navigateTo(e.target.href);
            }
        })
    }
}