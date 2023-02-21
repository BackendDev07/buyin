import React from 'react'
import styled from 'styled-components'
import { colors } from './../../helpers/colors'
import { LocationIcon } from './../../assets/icons'
import { Container, Span, Flex } from '../index'

function HeaderTop() {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <Flex gap={20} alignItems='center'>
                        <StyledBtn>
                            <Span>0% Рассрочка</Span>
                        </StyledBtn>
                        <Span color={colors.white}>Пункт выдачи</Span>
                        <Flex alignItems='center'>
                            <LocationIcon />
                            <Span color={colors.white}>г.Ургенч</Span>
                        </Flex>
                    </Flex>
                    <Flex gap={20} alignItems='center'>
                        <UnderlineText>Часто задаваемые вопросы</UnderlineText>
                        <StyledBtn>
                            <Span>Заказать звонок</Span>
                        </StyledBtn>
                    </Flex>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default HeaderTop

const Wrapper = styled.div`
    display: block;
    position: relative;
    padding: 9px 0;
    background-color: ${colors.blue['500']};
`

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StyledBtn = styled.button`
    background-color: ${colors.white};
    border-radius: 10px;
    width: 169px;
    height: 30px;
`
const UnderlineText = styled.span`
    color: ${colors.white};
    text-decoration: underline;
`
