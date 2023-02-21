import styled from "styled-components";
import { border, color, flexbox, overflowY, space } from "styled-system";

export const Box = styled.div`
    position: relative;
    height: ${props => props.h};
    width: ${props => props.w};

    ${space}
    ${color}
    ${flexbox}
    ${border}
    ${overflowY}
`
