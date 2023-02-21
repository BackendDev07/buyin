import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { CategoryCloseAC } from '../../redux/reducers/modalReducer'
import { Categories, Header, LoginModal } from '../index'

function Page(props) {
    const { children } = props
    const dispatch = useDispatch()
    const ref = useRef()
    useOnClickOutside(ref, () => dispatch(CategoryCloseAC()))
    return (
        <div>
            <Header />
            <Categories customRef={ref} />
            <LoginModal />
            <main>{children}</main>
        </div>
    )
}

export default Page
