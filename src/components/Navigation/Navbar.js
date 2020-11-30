import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import colors from '../UI/Colors/Colors';

const Btn = styled.button`
    height: 30px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    padding-right: 30px;

    &:before, &:after {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background-color: ${colors.blackTwo};
        position: absolute;
        top: 50%;
        right: 0;
        /* -webkit-transition: .3s cubic-bezier(.455,.03,.515,.955);
        transition: .3s cubic-bezier(.455,.03,.515,.955);   
        -webkit-transition-property: background-color,-webkit-transform;
        transition-property: background-color,-webkit-transform;
        transition-property: transform,background-color;
        transition-property: transform,background-color,-webkit-transform; */
    }

    &:before {
        -webkit-transform: translate3d(0,-50%,0) translate3d(0,-3px,0);
        transform: translate3d(0,-50%,0) translate3d(0,-3px,0);        
    }

    &:after {
        -webkit-transform: translate3d(0,-50%,0) translate3d(0,3px,0);
        transform: translate3d(0,-50%,0) translate3d(0,3px,0);
    }
`;

const MenuTxt = styled.span`
    font-family: Teko;
    font-size: 18px;
    color: ${colors.blackTwo};
    text-transform: uppercase;
    line-height: 1.8;
`;

const navbar = props => (
    <Fragment>
        <Btn><MenuTxt>Menu</MenuTxt></Btn>
        {/* <Link to="/">Work</Link> */}
    </Fragment>
)

export default navbar;