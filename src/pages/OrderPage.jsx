import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import styled from 'styled-components';
import { Box, Container, Flex, H2, H5, Page, Span } from '../components'
import { LoginInput } from '../components/loginModal/LoginModal';
import { colors } from '../helpers/colors';
import { CreateOrder } from '../redux/reducers/cartReducer';


const dataInitials = {
  orderItems: [],
  delivery_address: '',
  delivery_phone: '+998',
  order_note: '',
  payment_method: 0
}

function OrderPage() {
  const [data, setData] = useState(dataInitials)
  const params = useLocation()
  const dispatch = useDispatch()
  const handleChange = ({ target }) => {
    const { name, value } = target
    if (name === 'delivery_phone') {
      const x = value.replace(/\D/g, value).match(/ (\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
      console.log(x)

      const result = `${x[1] !== '' ? '+' + x[1] : ''} ${x[2] !== '' ? ' (' + x[2] : ''} ${x[3] !== '' ? ') ' + x[3] : ''} ${x[4] !== '' ? ' ' + x[4] : ''}${x[5] !== '' ? ' ' + x[5] : ''}`
      setData({
        ...data,
        [name]: result,
      })
    } else {
      setData({
        ...data,
        [name]: value,
      })
    }

  }
  const handleSubmit = () => {
    const posted_data = {
      ...data,
      orderItems: params.state.products.map((item) => {
        return {
          qty: item.qty,
          product_id: item.product_id
        }
      })
    } 
    dispatch(CreateOrder())
  }
  return <Page>
    <Container>
      <Flex mt='48px' justifyContent="center">
        <H2>Buyurtmani rasmiylashtirish</H2>
      </Flex>
      <Box w='700px' m='36px auto 0 auto'>

        <Box mb={24}>
          <Span mb='8px' style={{ display: 'block' }}>
            Add phone number:
          </Span>
          <LoginInput name='delivery_phone' type='tel' value={data.delivery_phone} onChange={handleChange} />
        </Box>
        <Box mb={24}>
          <Span mb='8px' style={{ display: 'block' }} >
            Add address:
          </Span>
          <LoginInput name='delivery_address' type='text' onChange={handleChange} value={data.delivery_address} />
        </Box>
        <Box mb={20}>
          <Span mb='8px' name='order_note' value={data.order_note} style={{ display: 'block' }}>
            Comment:
          </Span>
          <StyleTextArea type='tel' onChange={handleChange} />
        </Box>
        <Box>
        </Box>
        <Con>
          <LoginBtn onClick={handleSubmit} >
            <H5>Rasmiylashtirish</H5>
          </LoginBtn>
        </Con>
      </Box>
      
    </Container>
  </Page>

}

export default OrderPage

const StyleTextArea = styled.textarea`
    padding: 10px 15px;
    width: 100%;
    min-width: 300px;
    background: #f8f8f8;
    min-height: 150px;
    border: ${(props) =>
    props.errors ? '0.5px solid red' : '0.5px solid #b6b6b6'};
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${colors.black};
    outline: none;

    &::placeholder {
        color: #9d9d9d;
    }
`

const LoginBtn = styled.button`
    background: ${colors.blue[600]};
    border-radius: 10px;
    display: block;
    width: 50%;
    padding: 8px;
    border: 1px solid ${colors.blue[600]};
    transition: all 0.3s ease;
    color: ${colors.white};

    &:hover {
        background-color: transparent;

        h5 {
            color: ${colors.blue[600]};
        }
    }
`

const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`