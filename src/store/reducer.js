import * as actionTypes from './actions';

const initialState = {
    work: [],
    filteredWork: [],
    contactData: [],
    sentContactData: false,
    clients: null,
    error: null,
    loading: false
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_WORK_SUCCESS:
            return {
                ...state,
                work: action.work,
                clients: action.clients
            };  
        case actionTypes.FETCH_WORK_START:
            return {
                ...state,
                loading: true
            };  
        case actionTypes.FETCH_WORK_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };         
        case actionTypes.FILTER_WORK_SUCCESS:
            return {
                ...state,
                filteredWork: action.data,
                loading: false
            };    
        case actionTypes.FILTER_WORK_START:
            return {
                ...state,
                loading: true
            };   
        case actionTypes.CONTACT_DATA_INIT: 
            return {
                ...state,
                sentContactData: false
            };
        case actionTypes.CONTACT_DATA_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.CONTACT_DATA_SUCCESS:
            const newContact = {
                ...action.contactData,
                id: action.contactId
            };
            return {
                ...state,
                loading: false,
                sentContactData: true,
                contactData: state.contactData.concat(newContact)
            };
        case actionTypes.CONTACT_DATA_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }    
}


export default reducer;