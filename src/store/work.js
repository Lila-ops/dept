import * as actionTypes from './actions';
import axios from 'axios';

export const fetchWorkSuccess = (work) => {
    return {
        type: actionTypes.FETCH_WORK_SUCCESS,
        work: work
    }
};

export const fetchWorkFail = (error) => {
    return {
        type: actionTypes.FETCH_WORK_FAIL,
        error: error
    }
};

export const fetchWorkStart = () => {
    return {
        type: actionTypes.FETCH_WORK_START
    }
};

export const fetchWork = () => {
    return dispatch => {
        axios.get('./data.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(res => {
            const fetchedWork = [];
            for (let key in res.data) {
                fetchedWork.push({
                    ...res.data[key],
                    id: key
                });
            }
            dispatch(fetchWorkSuccess(fetchedWork))
        })
        .catch(err => {
            dispatch(fetchWorkFail(err))
        });
    };
};

export const filterWorkStart = (data) => {
    return {
        type: actionTypes.FILTER_WORK_START
    }
};

export const filterWorkSuccess = (data) => {
    return {
        type: actionTypes.FILTER_WORK_SUCCESS,
        data: data
    }
};

export const filterWork = (data) => {
    return dispatch => {
        dispatch(filterWorkSuccess(data))
    }
};