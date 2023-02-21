import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url(https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    ol,
    ul,
    li{
        list-style: none;
    }

    button{
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    .wrapper{
        position: relative;
        width: 100%;
        min-height: 100vh;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-style: normal;
        line-height: 100%;
        font-weight: normal;

        &::before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(87, 87, 87, 0.4);
            visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
            z-index: 10;
        }
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1380px;
    margin: 0 auto;
    padding: 0 20px;
`
