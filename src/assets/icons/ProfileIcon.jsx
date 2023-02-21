import * as React from 'react'

const ProfileIcon = (props) => (
    <svg
        width={30}
        height={30}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}
    >
        <circle cx={15} cy={9} r={4} stroke='#fff' strokeWidth={1.5} />
        <ellipse
            opacity={0.5}
            cx={15}
            cy={20}
            rx={7}
            ry={4}
            stroke='#fff'
            strokeWidth={1.5}
        />
    </svg>
)

export default ProfileIcon
