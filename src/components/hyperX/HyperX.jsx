import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'
import { Container } from '../GlobalStyles'
import Phone from '../../assets/images/HyperImages/HyperXPhone.png'
import Air from '../../assets/images/HyperImages/HyperXAir.png'

function HyperX() {
  return (
    <Box>
        <Container>
            <HyperBox>
                <img src={Air}/>
                <img src={Phone} alt="" />
                <img src={Air} alt="" />
            </HyperBox>
        </Container>
    </Box>
  )
}

export default HyperX

const HyperBox = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    justify-content: space-between;
`