import axios from "axios";
import * as actionTypes from './actionTypes';
import {Dispatch} from "redux";

const genericErrorText = 'There seems to be an error. Please try again!';

export const getActivities = () => async (dispatch: Dispatch) => {
    dispatch({type: actionTypes.GET_ACTIVITIES_START});
    console.log('start')

    try {
        const response = await axios.get('/activities');
        dispatch({type: actionTypes.GET_ACTIVITIES_SUCCESS, payload: response.data.data});
    } catch (error: any) { // TODO: replace any with right object type
        const errorMessage =  error.response.data.error ?? genericErrorText;
        dispatch({type: actionTypes.GET_ACTIVITIES_FAIL, error: errorMessage});
    }
}