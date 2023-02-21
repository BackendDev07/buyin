import React, { useEffect } from 'react'
import Page from '../components/page/Page'
import { useParams } from 'react-router-dom'
import { GetProduct } from '../redux/reducers/productsReducer'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    H2,
    Flex,
    SemiSpan,
    Img,
    Span,
    H5,
    Box,
    H4,
    Counter,
} from '../components'
import styled from 'styled-components'
import { colors } from '../helpers/colors'
import { DeliveryIcon, RefreshIcon } from '../assets/icons'
import HangerIcon from './../assets/icons/HangerIcon'
import useAuth from './../hooks/useAuth'
import { LoginModalOpenAC } from '../redux/reducers/modalReducer'
import {
    AddProductToCart,
    GetCartProducts,
} from '../redux/reducers/cartReducer'

function ProductPage() {
    const { slug } = useParams()
    const { product, loading } = useSelector((state) => state.productState)
    const { cartProducts, loading: cartLoading } = useSelector(
        (state) => state.cartState
    )
    const dispatch = useDispatch()
    const isLogin = useAuth()

    useEffect(() => {
        dispatch(GetProduct(slug))
        dispatch(GetCartProducts())
    }, [])

    const handleProductBtn = () => {
        if (isLogin) {
            dispatch(AddProductToCart(product.id))
        } else {
            dispatch(LoginModalOpenAC())
        }
    }

    return (
        <Page>
            <Container>
                {loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <Wrapper>
                        <Flex gap={8} mb='30px'>
                            <BreadCrumbItem>Главная &nbsp; /</BreadCrumbItem>
                            <BreadCrumbItem>
                                {product?.category?.name_uz} &nbsp;/
                            </BreadCrumbItem>
                            <BreadCrumbItem active={true}>
                                {product?.name_uz}{' '}
                            </BreadCrumbItem>
                        </Flex>

                        <H2 color='#3C3C3C' mb='30px'>
                            {product?.name_uz}
                        </H2>

                        <Flex
                            alignItems='flex-start'
                            justifyContent='space-between'
                            gap={60}
                        >
                            <ProductImageBlock>
                                <ProductImagesWrap>
                                    <ProductSmallImgWrap active={false}>
                                        <Img
                                            src={product?.image}
                                            alt={product?.name_uz}
                                            objectFit='contain'
                                        />
                                    </ProductSmallImgWrap>
                                </ProductImagesWrap>
                                <ProductImageWrap>
                                    <Img
                                        src={product?.image}
                                        alt={product?.name_uz}
                                        objectFit='contain'
                                    />
                                </ProductImageWrap>
                            </ProductImageBlock>

                            <ProductContentBlock>
                                <Flex alignItems='center' gap={5} mb='10px'>
                                    <DeliveryIcon />
                                    <Span color={colors.black}>
                                        Бесплатная доставка
                                    </Span>
                                </Flex>
                                <Flex alignItems='center' gap={5} mb='10px'>
                                    <HangerIcon />
                                    <Span color={colors.black}>Примерка</Span>
                                </Flex>
                                <Flex alignItems='center' gap={5} mb='10px'>
                                    <RefreshIcon />
                                    <Span color={colors.black}>
                                        Возврат товара
                                    </Span>
                                </Flex>
                                <Flex alignItems='center' gap={5} mb='10px'>
                                    <H5>Бренд:</H5>
                                    <Span color={colors.black}>
                                        {product?.brand?.name_uz}
                                    </Span>
                                </Flex>
                                <Box>
                                    <H2 color={colors.black}>
                                        Narxi: &nbsp;
                                        {Number(
                                            product?.price
                                        ).toLocaleString()}{' '}
                                        UZS
                                    </H2>

                                    {cartProducts.some(
                                        (item) => item.product_id === product.id
                                    ) ? (
                                        <Counter />
                                    ) : (
                                        <ProductBtn
                                            onClick={handleProductBtn}
                                            disabled={cartLoading}
                                        >
                                            <Span color={colors.white}>
                                                {cartLoading
                                                    ? 'Loading...'
                                                    : 'В Корзину'}
                                            </Span>
                                        </ProductBtn>
                                    )}

                                    <Box>
                                        <H4 color='#3C3C3C' mb='30px'>
                                            Описание
                                        </H4>
                                        <Span color='#717171'>
                                            {product?.description_uz}
                                        </Span>
                                    </Box>
                                </Box>
                            </ProductContentBlock>
                        </Flex>
                    </Wrapper>
                )}
            </Container>
        </Page>
    )
}

export default ProductPage

const Wrapper = styled.div`
    margin-top: 30px;
`
const BreadCrumbItem = styled(SemiSpan)`
    color: ${(props) => (props.active ? '#000' : '#767676')};
`
const ProductImageBlock = styled.div`
    width: 50%;
    height: 480px;
    display: flex;
    gap: 35px;
    align-items: center;
`

const ProductImagesWrap = styled.div`
    width: 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const ProductImageWrap = styled.div`
    height: 100%;
    flex: 1 1 auto;
    padding: 20px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
`

const ProductSmallImgWrap = styled.div`
    width: 55px;
    height: 55px;
    padding: 4px;
    overflow: hidden;
    border: ${(props) =>
        props.active
            ? `0.5px solid ${colors.blue[600]}`
            : ' 0.5px solid #c8c8c8'};
    border-radius: 10px;
    cursor: pointer;
`
const ProductContentBlock = styled.div`
    width: 50%;
    height: auto;
`
const ProductBtn = styled.button`
    width: 200px;
    display: inline-block;
    margin: 20px 0;
    background-color: ${colors.blue[600]};
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 10px 0;
    transition: all 0.3s ease;

    &:hover {
        background-color: transparent;
        border-color: ${colors.blue[600]};
        span {
            color: ${colors.blue[600]};
        }
    }
`
