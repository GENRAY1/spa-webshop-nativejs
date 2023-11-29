import Router from "./core/Router/Router";
import { routes } from "./routes";

export function app(){
    const router = new Router(routes);
    router.startListening()
}
app()