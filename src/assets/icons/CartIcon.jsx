import * as React from 'react'

const CartIcon = (props) => (
    <svg
        width={30}
        height={30}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            d='m5 6 .265.088c1.32.44 1.98.66 2.357 1.184C8 7.796 8 8.492 8 9.883V12.5c0 2.828 0 4.243.879 5.121.878.879 2.293.879 5.121.879h8'
            stroke='#1C274C'
            strokeWidth={1.5}
            strokeLinecap='round'
        />
        <path
            opacity={0.5}
            d='M10.5 21a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM19.5 21a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z'
            stroke='#1C274C'
            strokeWidth={1.5}
        />
        <path
            opacity={0.5}
            d='M14 12h-3'
            stroke='#1C274C'
            strokeWidth={1.5}
            strokeLinecap='round'
        />
        <path
            d='M8 9h11.45c2.055 0 3.083 0 3.527.674.445.675.04 1.619-.77 3.508l-.428 1c-.378.882-.567 1.322-.942 1.57-.376.248-.856.248-1.815.248H8'
            stroke='#1C274C'
            strokeWidth={1.5}
        />
    </svg>
)

export default CartIcon
