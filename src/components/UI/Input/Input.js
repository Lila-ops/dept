import React from 'react';
import styled from 'styled-components';
import colors from '../Colors/Colors';
import breakpoint from '../Breakpoints/Breakpoints';

const Input = styled.div`
    width: 100%;
    padding: 10px 0;
    box-sizing: border-box;
    flex: 1 0 100%;
    
    @media ${breakpoint.sm} {
        padding: 10px;
        flex: ${props => props.elType === 'input' ? '1 0 50%' : '1 0 100%'};
    }
`;

const Label = styled.label`
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    line-height: 2;
    color: ${colors.blackTwo};
`;

const InputElement = styled.input`
    outline: none;
    border: none;
    border-bottom: 1px solid ${props => props.invalid ? `${colors.orangeRed}` : `${colors.whiteThree}`};
    background-color: white;
    font: inherit;
    padding: 6px 0;
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-family: Teko;
    
    &:focus {
        outline: none;
    }

    @media ${breakpoint.sm} {
        padding: 6px 10px;
    }
`;

const TextareaElement = styled.textarea`
    outline: none;
    border: none;
    border-bottom: 1px solid ${props => props.invalid ? `${colors.orangeRed}` : `${colors.whiteThree}`};
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-family: Teko;

    &:focus {
        outline: none;
    }
`;

const InputError = styled.span`
    font-family: Arial;
    font-size: 13px;
    color: ${colors.orangeRed};
    padding-top: 10px;
    display: inline-block;
`;

const input = ( props ) => {
    let inputElement = null;
    let inputError = null;
    let invalid = false;

    if (props.invalid && props.shouldValidate && props.touched) {
        invalid = true;

        if (props.shouldValidate.isEmail && props.value !== "") {
            inputError = <InputError>Wrong mail!</InputError>;
        } else {
            inputError = <InputError>The Field is required!</InputError>
        }
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <InputElement
                {...props.elementConfig}
                invalid={invalid}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <TextareaElement
                {...props.elementConfig}
                invalid={invalid}
                value={props.value}
                onChange={props.changed} />;
            break;
        default:
            inputElement = <InputElement
                {...props.elementConfig}
                invalid={invalid}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <Input elType={props.elementType}>
            <Label>{props.label}</Label>
            {inputElement}
            {inputError}
        </Input>
    );

};

export default input;