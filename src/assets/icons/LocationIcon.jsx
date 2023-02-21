import * as React from 'react'

const LocationIcon = (props) => (
    <svg
        width={30}
        height={30}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <path
            opacity={0.5}
            d='M7 13.143C7 8.646 10.582 5 15 5s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C9.553 22.812 7 17.605 7 13.144Z'
            stroke='#fff'
            strokeWidth={1.5}
        />
        <circle cx={15} cy={13} r={3} stroke='#fff' strokeWidth={1.5} />
    </svg>
)

export default LocationIcon
