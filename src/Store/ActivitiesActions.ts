import axios from "axios";
import * as actionTypes from './actionTypes';
import {Dispatch} from "redux";
import {Activity} from "../Models";


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

export const updateActivity = (activity: Activity) => async (dispatch: Dispatch) => {
    dispatch({type: actionTypes.UPDATE_ACTIVITY_START});
    try {
        const response = await axios.patch(`/activities/${activity.id}`, activity);
        // response.data.data should be the same as activity.id
        dispatch(updateActivitySuccess(response.data.data));
    } catch (error: any) { // TODO: replace any with right object type
        const errorMessage = error?.response?.data?.error;
        dispatch({type: actionTypes.UPDATE_ACTIVITY_FAIL, error: errorMessage});
    }
}

export const checkActivity = (activity: Activity, check: boolean) => async (dispatch:Dispatch) => {
    dispatch({type: actionTypes.UPDATE_ACTIVITY_START});
    try {
        activity.status = check;
        const response = await axios.patch(`/activities/${activity.id}`, activity);
        dispatch({type: actionTypes.GET_ACTIVITIES_SUCCESS, payload: response.data.data});
    } catch (error: any) { // TODO: replace any with right object type
        const errorMessage = error?.response?.data?.error;
        dispatch({type: actionTypes.GET_ACTIVITIES_FAIL, error: errorMessage});
    }
}

export const updateActivitySuccess = (activityId: string) => {
    return {type: actionTypes.UPDATE_ACTIVITY_SUCCESS, payload: activityId};
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

export const deleteActivity = (activityId:string) => async (dispatch:Dispatch) => {
    dispatch({type: actionTypes.DELETE_ACTIVITY_START});
    try {
        const response = await axios.delete(`/activity/${activityId}`);
        // response.data.data should be the same as activityId
        dispatch({type: actionTypes.DELETE_ACTIVITY_SUCCESS, payload: response.data.data});
    } catch (error:any) {// TODO: replace any with right object type
        const errorMessage = error?.response?.data?.error;
        dispatch({type: actionTypes.DELETE_ACTIVITY_FAIL, error: errorMessage});
    }
}