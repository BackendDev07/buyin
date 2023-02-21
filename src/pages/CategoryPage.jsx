import React, { useEffect } from 'react'
import Page from '../components/page/Page'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorySlug } from './../redux/reducers/categoryReducers'

function CategoryPage() {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const { categoryProducts, categoryAttributes, categoryBrands } =
        useSelector((state) => state.categoryState)

    useEffect(() => {
        dispatch(getCategorySlug(slug))
    }, [slug])

    return <Page>CategoryPage</Page>
}

export default CategoryPage
