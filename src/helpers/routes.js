import Home from '../pages/Home'
import CategoryPage from './../pages/CategoryPage'
import ProductPage from './../pages/ProductPage'
import CartPage from '../pages/CartPage'
import OrderPage from '../pages/OrderPage'

export const routes = [
    {
        id: 1,
        path: '/',
        component: <Home />,
    },
    {
        id: 2,
        path: '/category/:slug',
        component: <CategoryPage />,
    },
    {
        id: 3,
        path: '/product/:slug',
        component: <ProductPage />,
    },
    {
        id: 4,
        path: '/cart',
        component: <CartPage />,
    },
    {
        id: 5,
        path: '/order',
        component: <OrderPage />,
    },
]
