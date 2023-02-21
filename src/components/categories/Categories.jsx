import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowRight } from '../../assets/icons'
import { colors } from '../../helpers/colors'
import { Box, Flex, H2, Img, Span } from '../index'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from './../../redux/reducers/categoryReducers'
import { Link } from 'react-router-dom'
import { CategoryCloseAC } from '../../redux/reducers/modalReducer'

function Categories(props) {
    const { customRef } = props
    const [subCategories, setSubCategories] = useState(null)
    const { categoryModal } = useSelector((state) => state.modalState)
    const { categories } = useSelector((state) => state.categoryState)
    const dispatch = useDispatch()

    const handleMouseEnter = (el) => {
        setSubCategories(el)
    }

    useEffect(function () {
        dispatch(getCategories())
    }, [])

    return (
        <Wrapper open={categoryModal} ref={customRef}>
            <Flex>
                <StyledBox>
                    {categories.map((item) => (
                        <Link
                            to={`/category/${item.slug}`}
                            onClick={() => dispatch(CategoryCloseAC())}
                        >
                            <StyledItem
                                key={item.id}
                                onMouseEnter={() => handleMouseEnter(item)}
                            >
                                <Flex alignItems='center' gap={12}>
                                    <StyledImgWrap>
                                        <Img
                                            src={item.image}
                                            objectFit='contain'
                                        />
                                    </StyledImgWrap>
                                    <Span>{item.name_uz}</Span>
                                </Flex>
                                {!!item.children.length && <ArrowRight />}
                            </StyledItem>
                        </Link>
                    ))}
                </StyledBox>
                {!!subCategories?.children?.length && (
                    <StyledBox>
                        <H2 pl='50px' mb='20px'>
                            {subCategories?.name}
                        </H2>

                        {subCategories?.children?.map((item) => (
                            <StyledItem key={item.id}>
                                <Span>{item.name}</Span>
                                {!!item.children.length && <ArrowRight />}
                            </StyledItem>
                        ))}
                    </StyledBox>
                )}
            </Flex>
        </Wrapper>
    )
}

export default Categories

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: ${(props) => (props.open ? '0' : '-100%')};
    z-index: 10;
    transition: all 0.3s ease;
`

const StyledBox = styled(Box)`
    width: 330px;
    min-height: 70vh;
    max-height: 100vh;
    overflow-y: auto;
    padding: 30px 0;
    background-color: ${colors.white};

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: #e7e7e7;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #2b3c7a;
        border-radius: 10px;
    }
`

const StyledItem = styled(Flex)`
    justify-content: space-between;
    padding: 8px 16px 8px 50px;
    cursor: pointer;

    &:hover {
        background-color: ${colors.blue[500]};
        color: ${colors.white};

        path {
            stroke: ${colors.white};
        }
    }
`
const StyledImgWrap = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
`
