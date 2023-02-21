import styled from "styled-components";
import { borderRadius } from "styled-system";

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: ${props => props.objectFit};

    ${borderRadius};    
`