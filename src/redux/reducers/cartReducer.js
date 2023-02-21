import Axios from './../../helpers/axios'
import {
    cartAddUrl,
    cartListUrl,
    GetcartProductRemoveUrl,
    orderCreateUrl,
} from './../../helpers/url'

const SET_LOADING = 'SET_LOADING'
const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS'

const initialState = {
    cartProducts: [],
    loading: false,
}

function CartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: action.payload.loading }

        case SET_CART_PRODUCTS:
            return { ...state, cartProducts: action.payload.cartProducts }

        default:
            return state
    }
}

export const SetLoadingAC = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
})

export const SetCartProductsAC = (cartProducts) => ({
    type: SET_CART_PRODUCTS,
    payload: { cartProducts },
})

export default CartReducer

export function AddProductToCart(product_id, qty = 1) {
    return async function (dispatch) {
        Axios.post(cartAddUrl, { qty, product_id })
            .then(function (response) {
                if (response.data.cart) {
                    dispatch(SetCartProductsAC(response.data.cart))
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export function GetCartProducts() {
    return async function (dispatch) {
        dispatch(SetLoadingAC(true))

        Axios.get(cartListUrl)
            .then(function (response) {
                if (response.data.cart) {
                    dispatch(SetCartProductsAC(response.data.cart))
                    dispatch(SetLoadingAC(false))
                }
            })
            .catch(function (error) {
                dispatch(SetLoadingAC(false))
                console.log(error)
            })
    }
}

export function RemoveCartProduct(product_id) {
    return async function (dispatch) {
        dispatch(SetLoadingAC(true))

        Axios.post(GetcartProductRemoveUrl(product_id))
            .then(function (response) {
                if (response.data.cart) {
                    dispatch(SetCartProductsAC(response.data.cart))
                    dispatch(SetLoadingAC(false))
                }
            })
            .catch(function (error) {
                dispatch(SetLoadingAC(false))
                console.log(error)
            })
    }
}

export function DeleteCartProduct(product_id) {
    return async function (dispatch) {
        Axios.post(GetcartProductRemoveUrl(product_id))
            .then(function (response) {
                if (response.data.cart) {
                    dispatch(SetCartProductsAC(response.data.cart))
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export function CreateOrder(data) {
    return async function (dispatch) {
        Axios.post(orderCreateUrl, data)
            .then(function (response) {
                
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}
