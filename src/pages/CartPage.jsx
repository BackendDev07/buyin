import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Flex,
    Page,
    SemiSpan,
    H2,
    ProductCardTwo,
    H1,
    H4,
    Box,
} from '../components/index'
import { colors } from '../helpers/colors'
import { GetCartProducts } from '../redux/reducers/cartReducer'
import { Link } from 'react-router-dom'

function CartPage() {
    const { cartProducts, loading } = useSelector((state) => state.cartState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetCartProducts())
    }, [])
    return (
        <Page>
            <Container>
                <Box mt='30px'>
                    <Flex gap={8} mb='30px'>
                        <BreadCrumbItem>Главная &nbsp; /</BreadCrumbItem>
                        <BreadCrumbItem>Корзина</BreadCrumbItem>
                    </Flex>

                    <Flex mb={30}>
                        <H2>
                            Товаров в корзине{' '}
                            {cartProducts?.length > 0 && cartProducts.length}
                        </H2>
                    </Flex>
                </Box>
                <Wrapper>
                    <LeftBlock>
                        {loading ? (
                            <h2>Loading...</h2>
                        ) : (
                            <Flex flexDirection='column'>
                                {cartProducts?.map((item) => (
                                    <ProductCardTwo
                                        product={item}
                                        key={item.id}
                                    />
                                ))}
                            </Flex>
                        )}
                    </LeftBlock>
                    <RightBlock>
                        <Flex gap={30} justifyContent='center' mb={30}>
                            <H1>Итого: </H1>
                            <H1>766.000 UZS</H1>
                        </Flex>

                        <Flex
                            flexDirection='column'
                            gap={6}
                            borderBottom='1px solid #D9D9D9'
                            p='0 16px 16px 16px'
                            mb={16}
                        >
                            <Flex justifyContent='space-between'>
                                <H4>Промокод: </H4>
                                <H4 color='#888888'>0 сум</H4>
                            </Flex>
                            <Flex justifyContent='space-between'>
                                <H4>Сумма доставки: </H4>
                                <H4 color='#888888'>30.000 сум</H4>
                            </Flex>
                            <Flex justifyContent='space-between'>
                                <H4>Сумма товара: </H4>
                                <H4 color='#888888'>736.000 сум</H4>
                            </Flex>
                        </Flex>

                        <Flex
                            flexDirection='column'
                            gap={6}
                            p='0 16px 0 16px'
                            mb={16}
                        >
                            <Flex justifyContent='space-between'>
                                <H4>Доставка: </H4>
                                <H4 color='#888888'>Курьером</H4>
                            </Flex>
                            <Flex justifyContent='space-between'>
                                <H4>Тип оплаты: </H4>
                                <H4 color='#888888'>Пластик</H4>
                            </Flex>
                        </Flex>
                        <Flex p='0 16px' flexDirection='column'>
                            <Link to='/order'
                                 state= {
                                    {products: cartProducts}
                                }
                            style={{width:'100%'}} >
                                <StyledButton>
                                    <H4 color={colors.white}>Оформить заказ</H4>
                                </StyledButton>
                            </Link>

                            <SemiSpan color='#888888'>
                                Нажимая 'Оформить заказ', я соглашаюсь с
                                публичным договором оферты
                            </SemiSpan>
                        </Flex>
                    </RightBlock>
                </Wrapper>
            </Container>
        </Page>
    )
}

export default CartPage

const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

const LeftBlock = styled.div`
    width: 59%;
`

const RightBlock = styled.div`
    width: 32%;
    position: sticky;
    top: 30px;
    background: ${colors.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding: 23px 0;
`

const BreadCrumbItem = styled(SemiSpan)`
    color: ${(props) => (props.active ? '#000' : '#767676')};
`
const StyledButton = styled.button`
    background: ${colors.blue[600]};
    border-radius: 10px;
    padding: 10px 0;
    margin-bottom: 16px;
    border: 1px solid ${colors.blue[600]};
    flex: 1 1 auto;
    transition: all 0.3s ease;
    width: 100%;

    &:hover {
        background-color: transparent;

        h4 {
            color: ${colors.blue[600]};
        }
    }
`
