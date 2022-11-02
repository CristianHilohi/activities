import axios from "axios";
import * as actionTypes from './actionTypes';
import {Dispatch} from "redux";
import {Activity, Todo} from "../Models";
import {updateActivitySuccess} from "./ActivitiesActions";

export const createTodo = (activity: Activity, todo: Todo) => async (dispatch: Dispatch) => {
    dispatch({type: actionTypes.CREATE_TODO_START});
    try {
        // @ts-ignore
        activity.todoList.push(todo);
        const response = await axios.patch(`/activities/${activity.id}`, activity);
        dispatch(updateActivitySuccess(response.data.data));
    } catch (error: any) { // TODO: replace any with right object type
        const errorMessage = error?.response?.data?.error;
        dispatch({type: actionTypes.UPDATE_ACTIVITY_FAIL, error: errorMessage});
    }
}
