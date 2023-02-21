import React from 'react'
import styled from 'styled-components'
import {
    AvatarIcon,
    CartIcon,
    CategoryIcon,
    Logo,
    ProfileIcon,
    SearchIcon,
} from '../../assets/icons'
import { colors } from './../../helpers/colors'
import { Box, Container, Flex, Span, SemiSpan } from '../index'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryOpenAC } from '../../redux/reducers/modalReducer'
import { LoginModalOpenAC } from './../../redux/reducers/modalReducer'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from './../../hooks/useAuth'
import { Badge } from 'antd'

function HeaderMain() {
    const { loginModal } = useSelector((state) => state.modalState)
    const dispatch = useDispatch()
    const isLogin = useAuth()
    const navigate = useNavigate()

    const handleProfileBtn = () => {
        if (!isLogin) {
            dispatch(LoginModalOpenAC())
        }
    }

    const handleCartButton = () => {
        navigate('/cart')
    }

    const { recommendedProducts} = useSelector(
        (state) => state.productState
    )
    const { cartProducts } = useSelector((state) => state.cartState)
    return (
        <Wrapper>
            <Container>
                <Flex>
                    <Box mr='64px'>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </Box>

                    <Flex>
                        <CategoryMenuBtn
                            onClick={() => dispatch(CategoryOpenAC())}
                        >
                            <CategoryIcon />
                            <Span color={colors.white}>Категории</Span>
                        </CategoryMenuBtn>

                        <SearchWrapper>
                            <SearchInput placeholder='Введите запрос...' data={recommendedProducts} />
                            <SearchBtn>
                                <SearchIcon />
                            </SearchBtn>
                        </SearchWrapper>

                        <BtnsWrapper>
                            <Badge count={cartProducts?.length > 0 && cartProducts.length} >
                            <CartButtonWrapper onClick={handleCartButton}>
                                <CartIcon />
                                <SemiSpan color={colors.black}>
                                    Корзина
                                </SemiSpan>
                            </CartButtonWrapper>
                            </Badge>
                            <RegisterBtn onClick={handleProfileBtn}>
                                {isLogin ? <AvatarIcon /> : <ProfileIcon />}
                                <SemiSpan color={colors.white}>
                                    {isLogin ? 'Профиль' : 'Регистрация'}
                                </SemiSpan>
                            </RegisterBtn>
                        </BtnsWrapper>
                    </Flex>
                </Flex>
            </Container>
        </Wrapper>
    )
}

export default HeaderMain

const Wrapper = styled.div`
    padding: 16px 0;
    background-color: ${colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`
const CategoryMenuBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 36px;
    background: ${colors.blue['600']};
    border-radius: 0px 20px 0px 0px;
`

const SearchWrapper = styled.div`
    overflow: hidden;
    margin: 0 14px;
    width: 450px;
    display: flex;
    border: 1px solid ${colors.blue['700']};
    border-radius: 10px;
`

const SearchInput = styled.input`
    flex-grow: 1;
    padding: 6px 0 6px 26px;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
        color: '#BEBEBE';
    }
`

const SearchBtn = styled.button`
    width: 62px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blue['700']};
    border-radius: 10px;
`
const BtnsWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const RegisterBtn = styled.button`
    padding: 3px 13px 3px 3px;
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: ${colors.blue[500]};
    border-radius: 5px;
    border: 1px solid ${colors.blue[500]};
    transition: all 0.3s ease;

    &:hover {
        background-color: transparent;

        span {
            color: ${colors.blue[500]};
        }

        svg,
        circle,
        ellipse {
            stroke: ${colors.blue[500]};
        }
    }
`
const CartButtonWrapper = styled.button`
    padding: 3px 13px 3px 3px;
    display: flex;
    align-items: center;
    gap: 5px;
    border-radius: 5px;
    border: 1px solid transparent;
    transition: all 0.3s ease;

    &:hover {
        border: 1px solid ${colors.blue[500]};
    }
`