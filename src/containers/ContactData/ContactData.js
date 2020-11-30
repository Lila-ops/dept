import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import colors from '../../components/UI/Colors/Colors';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import Input from '../../components/UI/Input/Input';
import breakpoint from '../../components/UI/Breakpoints/Breakpoints';
import * as actions from '../../store/index';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    padding: 20px 0;
    
    @media ${breakpoint.sm} {
        padding: 80px 0;
        flex-direction: row;
    }
`;

const Title = styled.h4`
  font-family: Teko;
  font-size: 30px;
  line-height: 1;
  flex: 1 0 25%;
  padding: 0 20px 10px 20px;
  color: ${colors.black};
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  @media ${breakpoint.sm} {
      font-size: 60px;
      padding: 0;
      display: block;
      flex-direction: unset;
      justify-content: unset;
    }
`;

const Form = styled.div`
    flex: 1 0 75%;
    padding: 0 20px;
    
  @media ${breakpoint.sm} {
    padding: 0;
  }
`;

const FormInnerWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

class ContactData extends Component {
    state = {
        contactForm: {
            name: {
                elementType: 'input',
                label: 'Your Name',
                elementConfig: {
                    placeholder: '',
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                label: 'Your E-Mail',
                elementConfig: {
                    placeholder: '',
                    type: 'email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            message: {
                elementType: 'textarea',
                label: 'Your Message',
                elementConfig: {
                    placeholder: '',
                    type: 'text'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    contactHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.contactForm) {
            formData[formElementIdentifier] = this.state.contactForm[formElementIdentifier].value;
        }

        this.setState((prevState) => ({
                ...prevState,
                ...prevState.formIsValid,
                formIsValid: !prevState.formIsValid,
                contactForm: {
                    ...prevState.contactForm,
                    name: {
                        ...prevState.contactForm.name,
                        value: ""
                    },
                    email: {
                        ...prevState.contactForm.email,
                        value: ""
                    },
                    message: {
                        ...prevState.contactForm.message,
                        value: ""
                    }
                }
            })
        );

        this.props.onContactData(formData);
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedContactForm = {
            ...this.state.contactForm
        };
        const updatedFormElement = {
            ...updatedContactForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedContactForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedContactForm) {
            formIsValid = updatedContactForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({contactForm: updatedContactForm, formIsValid: formIsValid});
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }

        let form = (
            <form onSubmit={this.contactHandler}>
                <FormInnerWrap>
                    {formElementsArray.map(formElement => (
                        <Input
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            label={formElement.config.label}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            invalid={!formElement.config.valid}
                            shouldValidate={formElement.config.validation}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                    ))}
                </FormInnerWrap>
                <Button
                    btnType="Success"
                    bgColor={colors.strongBlue}
                    width="140px"
                    disabled={!this.state.formIsValid}
                    >
                        SEND
                </Button>

            </form>
        );

        if ( this.props.loading ) {
            form = <Spinner />;
        }

        return (
            <Container>
                <Title>
                    <p>Question?</p>
                    <p>We are here to help!</p>
                </Title>
                <Form>{form}</Form>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onContactData: (contactData) => dispatch(actions.contactData(contactData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactData);