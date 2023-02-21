export const domain = 'https://ecommerce.main-gate.appx.uz'
export const APP_VERSION = '/v1'
export const APP_MODE = '/dev'

// Banners

export const BannersListUrl = '/events/list'

// Categories

export const CategoriesListUrl = '/category/list'
export const GetCategoryWithSlug = (slug) => `/category/${slug}`

// Products

export const RecommendedProductsListUrl = '/product/list'
export const GetProductWithSlug = function (slug) {
    return `/product/${slug}`
}   

// User

export const login = '/auth/login'
export const verify = '/auth/verify'
export const refreshUrl = '/auth/refresh'

// Cart

export const cartListUrl = '/cart/list'
export const cartAddUrl = '/cart/add'
export const GetcartProductRemoveUrl = (id) => `/cart/remove/${id}`
export const GetcartProductDeleteUrl = (id) => `/cart/delete/${id}`

// Orders

export const orderCreateUrl = '/order/create'
