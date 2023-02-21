import axios from 'axios'
import Axios from '../../helpers/axios'
import { GetCategoryWithSlug } from '../../helpers/url'

const SET_CATEGORY_PRODUCTS = 'SET_CATEGORY_PRODUCTS'
const SET_CATEGORY_BRANDS = 'SET_CATEGORY_BRANDS'
const SET_CATEGORY_ATTRIBUTES = 'SET_CATEGORY_ATTRIBUTES'
const SET_CATEGORY_SUBCATEGORIES = 'SET_CATEGORY_SUBCATEGORIES'
const SET_CATEGORY_PAGINATION = 'SET_CATEGORY_PAGINATION'
const SET_LOADING = 'SET_LOADING'

const initialState = {
    categories: [
        {
            id: 1,
            name: 'Мужчинам',
            img: '',
            children: [],
        },
        {
            id: 2,
            name: 'Женщинам',
            img: '',
            children: [],
        },
        {
            id: 3,
            name: 'Спорт',
            img: '',
            children: [
                {
                    id: 31,
                    name: 'Спорт пит',
                    img: '',
                    children: [],
                },
                {
                    id: 32,
                    name: 'Фитнес и тренажеры',
                    img: '',
                    children: [],
                },
                {
                    id: 33,
                    name: 'Спортивные кроссовки',
                    img: '',
                    children: [],
                },
                {
                    id: 34,
                    name: 'Спорт пит',
                    img: '',
                    children: [],
                },
                {
                    id: 35,
                    name: 'Фитнес и тренажеры',
                    img: '',
                    children: [],
                },
            ],
        },
        {
            id: 4,
            name: 'Электроника',
            img: '',
            children: [],
        },
    ],
    categoryProducts: [],
    categoryAttributes: [],
    categoryBrands: [],
    pagination: {
        current: null,
        next: null,
        per_page: 10,
        previous: null,
        total: null,
    },
    subCats: [],
    loading: false,
}

function CategoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload.categories }

        case SET_CATEGORY_PRODUCTS:
            return { ...state, categoryProducts: action.payload.products }

        case SET_CATEGORY_BRANDS:
            return { ...state, categoryBrands: action.payload.brands }

        case SET_CATEGORY_ATTRIBUTES:
            return { ...state, categoryAttributes: action.payload.attributes }

        case SET_CATEGORY_PAGINATION:
            return { ...state, pagination: action.payload.pagination }

        case SET_CATEGORY_SUBCATEGORIES:
            return { ...state, subCats: action.payload.subCats }

        case SET_LOADING:
            return { ...state, loading: action.payload.loading }

        default:
            return state
    }
}

export default CategoryReducer

export const SetCategoriesAC = (categories) => ({
    type: 'SET_CATEGORIES',
    payload: { categories },
})

export const SetLoadingAC = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
})

export const SetCategoryProductsAC = (products) => ({
    type: SET_CATEGORY_PRODUCTS,
    payload: { products },
})

export const SetCategoryBrandsAC = (brands) => ({
    type: SET_CATEGORY_BRANDS,
    payload: { brands },
})

export const SetCategoryAttributesAC = (attributes) => ({
    type: SET_CATEGORY_ATTRIBUTES,
    payload: { attributes },
})

export const SetCategoryPaginationAC = (pagination) => ({
    type: SET_CATEGORY_PAGINATION,
    payload: { pagination },
})

export const SetCategorySubCatsAC = (subCats) => ({
    type: SET_CATEGORY_SUBCATEGORIES,
    payload: { subCats },
})

export function getCategories() {
    return function (dispatch) {
        axios
            .get('https://ecommerce.main-gate.appx.uz/dev/v1/category/list')
            .then(function (response) {
                dispatch(SetCategoriesAC(response.data.categories))
            })
            .catch(function (error) {
                console.log(error)
            })
    }
}

export function getCategorySlug(slug) {
    return async function (dispatch) {
        dispatch(SetLoadingAC(true))
        Axios.get(GetCategoryWithSlug(slug))
            .then(function (response) {
                console.log(response.data)
                dispatch(SetCategoryProductsAC(response.data.products))
                dispatch(
                    SetCategoryAttributesAC(response.data.categoryAttributes)
                )
                dispatch(SetCategoryBrandsAC(response.data.categoryBrands))
                dispatch(SetCategoryPaginationAC(response.data.pagination))
                dispatch(SetCategorySubCatsAC(response.data.subCats))
                dispatch(SetLoadingAC(false))
            })
            .catch(function (error) {
                console.log(error)
                dispatch(SetLoadingAC(false))
            })
    }
}
