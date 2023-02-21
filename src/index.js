import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'react-loading-skeleton/dist/skeleton.css'
import { store } from './redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.querySelector('.wrapper'))

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)
