import React from 'react';
import styled from 'styled-components';
import colors from '../Colors/Colors';

const Button = styled.button`
    width: ${props => props.width};
    height: 50px;
    padding: 8px 30px 12px;
    font-size: 15px;
    font-family: Arial;
    text-transform: uppercase;
    border: none;
    color: ${colors.whiteTwo};
    background-color: ${props => props.bgColor};
    cursor: pointer;
    outline: none;

    &[disabled] {
        background-color: ${colors.paleGrey};
        cursor: not-allowed;
    }
`;

const button = (props) => (
    <Button 
        disabled={props.disabled} 
        onClick={props.clicked} 
        bgColor={props.bgColor} 
        width={props.width}>{props.children}</Button>
);

export default button;