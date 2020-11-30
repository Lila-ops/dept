import * as actionTypes from './actions';
import axios from '../axios-contacts';

export const contactDataStart = () => {
    return { 
        type: actionTypes.CONTACT_DATA_START
    }
}

export const contactDataFail = (error) => {
    return {
        type: actionTypes.CONTACT_DATA_FAIL,
        error: error
    }
}

export const contactDataSuccess = (id, contactData) => {
    return {
        type: actionTypes.CONTACT_DATA_SUCCESS,
        contactId: id,
        contactData: contactData
    }
}

export const contactData = (contactData) => {
    return dispatch => {
        dispatch(contactDataStart());
        axios.post( '/contacts.json', contactData )
            .then( response => {
                dispatch(contactDataSuccess(response.data.name, contactData));
            } )
            .catch( error => {
                dispatch(contactDataFail(error));
            } );
    }
}

export const contactDataInit = () => {
    return { 
        type: actionTypes.CONTACT_DATA_INIT
    }
}