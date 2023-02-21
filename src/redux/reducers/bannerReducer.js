import Axios from './../../helpers/axios'
import { BannersListUrl } from '../../helpers/url'

const SET_LOADING = 'SET_LOADING'

const initialState = {
    banners: [],
    loading: false,
}

function BannerReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_BANNERS':
            return { ...state, banners: action.payload.banners }

        case SET_LOADING:
            return { ...state, loading: action.payload.loading }

        default:
            return state
    }
}

export const SetBannersAC = (banners) => ({
    type: 'SET_BANNERS',
    payload: { banners },
})

export const SetLoadingAC = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
})

export default BannerReducer

export function GetBanners() {
    return function (dispatch) {
        dispatch(SetLoadingAC(true))
        Axios.get(BannersListUrl)
            .then(function (response) {
                dispatch(SetBannersAC(response.data.events))
                dispatch(SetLoadingAC(false))
            })
            .then(function (err) {
                dispatch(SetLoadingAC(false))
            })
    }
}
