import React from 'react'
import HeaderMain from './HeaderMain'
import HeaderTop from './HeaderTop'

function Header(props) {
    const { open, setOpen } = props
    return (
        <>
            <HeaderTop />
            <HeaderMain open={open} setOpen={setOpen} />
        </>
    )
}

export default Header
