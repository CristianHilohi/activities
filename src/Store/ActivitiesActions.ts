import axios from "axios";
import * as actionTypes from './actionTypes';
import {Dispatch} from "redux";


export const getActivities = () => async (dispatch: Dispatch) => {
    dispatch({type: actionTypes.GET_ACTIVITIES_START});
    try {
        const response = await axios.get('/activities');
        dispatch({type: actionTypes.GET_ACTIVITIES_SUCCESS, payload: response.data.data});
    } catch (error: any) { // TODO: replace any with right object type
        const errorMessage = error?.response?.data?.error;
        dispatch({type: actionTypes.GET_ACTIVITIES_FAIL, error: errorMessage});
    }
}

export const updateActivity = (activityId: string) => async (dispatch: Dispatch) => {
    dispatch({type: actionTypes.UPDATE_ACTIVITY_START});
    try {
        const response = await axios.patch(`/activities/${activityId}`);
        dispatch({type: actionTypes.UPDATE_ACTIVITY_SUCCESS, payload: response.data.data});
    } catch (error: any) { // TODO: replace any with right object type
        const errorMessage = error?.response?.data?.error;
        dispatch({type: actionTypes.UPDATE_ACTIVITY_FAIL, error: errorMessage});
    }
}

export const createActivity = () => async (dispatch: Dispatch) => {
    dispatch({type: actionTypes.CREATE_ACTIVITY_START});
    try {
        const response = await axios.post(`/activities`);
        dispatch({type: actionTypes.CREATE_ACTIVITY_SUCCESS});
    } catch (error: any) { // TODO: replace any with right object type
        const errorMessage = error?.response?.data?.error;
        dispatch({type: actionTypes.CREATE_ACTIVITY_FAIL, error: errorMessage});
    }
}