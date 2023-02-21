import * as React from 'react'

const AvatarIcon = (props) => (
    <svg
        width={30}
        height={30}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <circle
            opacity={0.5}
            cx={15}
            cy={12}
            r={3}
            stroke='#1C274C'
            strokeWidth={1.5}
        />
        <circle cx={15} cy={15} r={10} stroke='#1C274C' strokeWidth={1.5} />
        <path
            opacity={0.5}
            d='M20.97 23c-.16-2.892-1.045-5-5.97-5-4.924 0-5.81 2.108-5.969 5'
            stroke='#1C274C'
            strokeWidth={1.5}
            strokeLinecap='round'
        />
    </svg>
)

export default AvatarIcon
