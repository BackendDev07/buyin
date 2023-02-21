import React from 'react'

function Section(props) {
    const { children } = props
    return (
        <div>
            <div>top</div>
            <div>{children}</div>
            <div>footer</div>
        </div>
    )
}

export default Section
