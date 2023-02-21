import React from 'react'
import styled from 'styled-components'
import { colors } from '../helpers/colors'
import { H4 } from './Typography'

function Counter(props) {
    const { qty, incrementButton, decrementButton } = props
    return (
        <Wrapper>
            <StyledButton onClick={decrementButton}>&#45;</StyledButton>
            <H4>{qty}</H4>
            <StyledButton onClick={incrementButton}>&#43;</StyledButton>
        </Wrapper>
    )
}

export default Counter

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
const StyledButton = styled.button`
    background-color: ${colors.blue[600]};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: ${colors.white};
`
