import ContactsPage from "./app/pages/contactsPage/ContactsPage";
import NotFoundPage from "./app/pages/notFoundPage/NotFoundPage";
import ProductsPage from "./app/pages/productsPage/ProductsPage";

export const routes = {
    urls:[
        {path:'/', renderPage: ProductsPage},
        {path:'/products', renderPage: ProductsPage},
        {path:'/contacts', renderPage: ContactsPage},
    ], 
    defaultPage: NotFoundPage
}