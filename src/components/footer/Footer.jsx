import React from 'react'
import styled from 'styled-components'
import { Flex } from '../Flex'
import { Container } from '../GlobalStyles'
import AddOne from '../../assets/images/AddIcons/AddOne'
import AddTwo from '../../assets/images/AddIcons/AddTwo'

function Footer() {
  return (
    <Flex>
      <Foot>
      <Container>
        <FootBox>
          <FootMenuOne>
              <BoxOf>
                  <FootH2  >Lorem Ipsum</FootH2>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorrrrrrrrrrm Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
              </BoxOf> 
              <BoxOf>
              <FootH2>Lorem Ipsum</FootH2>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText></BoxOf> 
              <BoxOf>
              <FootH2>Lorem Ipsum</FootH2>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText></BoxOf> 
              <BoxOf>
              <FootH2>Lorem Ipsum</FootH2>
                  <BoxText>Lorem Ipsum</BoxText>
                  <BoxText>Lorem Ipsum</BoxText></BoxOf> 
              <BoxOfbox>
              <FootH2>Available on</FootH2>
                  <AddOne/>
                  <AddTwo/>
              </BoxOfbox> 
          </FootMenuOne>
          <FootMenuTwo>
            <FootText>2022 - BuyIn - The most famous e-commerce website in Uzbekistan since in 2022</FootText>
          </FootMenuTwo>
        </FootBox>
      </Container>
      </Foot>
      
    </Flex>
  )
}

export default Footer

const Foot = styled.div`
  background: #2B3C7A;
  padding: 70px 240px;
  width: 100%;
  margin-top: 80px;
`
const BoxText = styled.p`
  font-weight: 400;
  font-size: 16px; 
  cursor: pointer;
  line-height: 24px;
  color: #DADADA;
`
const FootText = styled.p`
  width: 435px;
  height: 48px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #DADADA;
`

const FootBox  = styled.div`
  display: block;
  text-align: center;
`
const FootMenuOne = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 103px;
`

const FootMenuTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 `
const BoxOf = styled.div`
  display: flex;
  flex-direction: column;
`
const BoxOfbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`

const FootH2 = styled.p`
  font-weight: 600;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
cursor: pointer;
`