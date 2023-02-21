import Axios from './../../helpers/axios'
import { login, verify } from './../../helpers/url'
import { LoginModalCloseAC } from './modalReducer'

const SET_LOADING = 'SET_LOADING'
const SET_USER = 'SET_USER'
const SET_IS_CODE = 'SET_IS_CODE'

const initialState = {
    user: {},
    isCode: false,
    loading: false,
}

function UserReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, loading: action.payload.loading }

        case SET_USER:
            return { ...state, user: action.payload.user }

        case SET_IS_CODE:
            return { ...state, isCode: action.payload.isCode }

        default:
            return state
    }
}

export const SetLoadingAC = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
})

export const SetUserAC = (user) => ({
    type: SET_USER,
    payload: { user },
})

export const SetIsCodeAC = (isCode) => ({
    type: SET_IS_CODE,
    payload: { isCode },
})

export default UserReducer

// export function GetUser(slug) {
//     return async function (dispatch) {
//         dispatch(SetLoadingAC(true))
//         Axios.get(GetProductWithSlug(slug))
//             .then(function (response) {
//                 dispatch(SetProductAC(response.data.product))
//                 dispatch(SetLoadingAC(false))
//             })
//             .catch(function (error) {
//                 dispatch(SetLoadingAC(false))
//             })
//     }
// }

export function PostUser(email) {
    return async function (dispatch) {
        dispatch(SetLoadingAC(true))
        Axios.post(login, { email: email })
            .then(function (response) {
                if (response.data.isOk) {
                    dispatch(SetIsCodeAC(true))
                    dispatch(SetLoadingAC(false))
                }
            })
            .catch(function (error) {
                console.log(error)
                dispatch(SetLoadingAC(false))
            })
    }
}

export function PostUserVerify({ email, code }) {
    return async function (dispatch) {
        dispatch(SetLoadingAC(true))
        Axios.post(verify, { email, code })
            .then(function (response) {
                if (response.data.isOk) {
                    localStorage.setItem(
                        'accessToken',
                        response.data.accessToken
                    )
                    localStorage.setItem(
                        'refreshToken',
                        response.data.refreshToken
                    )
                    dispatch(SetLoadingAC(false))
                    dispatch(LoginModalCloseAC(false))
                }
            })
            .catch(function (error) {
                console.log(error)
                dispatch(SetLoadingAC(false))
            })
    }
}
