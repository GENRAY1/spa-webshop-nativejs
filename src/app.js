
import Footer from "./app/layout/footer/Footer";
import Header from "./app/layout/header/Header";
import Main from "./app/layout/main/Main";
import Router from "./core/Router/Router";
import Layout from "./core/layout/Layout";
import { routes } from "./routes";

export function app(){
    const appElement = document.getElementById("app")

    const layout = new Layout(appElement)
    const header = new Header()
    const main = new Main();
    const footer = new Footer();

    layout.render(header,main,footer);

    const router = new Router(routes);
    router.startListening()
}
app()