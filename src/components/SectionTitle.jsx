import React from 'react'
import styled from 'styled-components'
import { colors } from '../helpers/colors'
import { H2 } from './index'

function SectionTitle(props) {
    const { title } = props
    return (
        <Wrapper>
            <H2 color={colors.white}>{title}</H2>
        </Wrapper>
    )
}

export default SectionTitle

const Wrapper = styled.div`
    width: 240px;
    padding: 8px 0;
    margin-bottom: 30px;
    text-align: center;
    background: ${colors.blue[500]};
    border-radius: 0px 30px 0px 0px;
`