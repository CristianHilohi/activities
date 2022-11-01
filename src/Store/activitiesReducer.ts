import * as actionTypes from './actionTypes';
import produce from 'immer';
import { toast } from 'react-toastify';
import {Activity, Todo} from "../Models";

const genericErrorText = 'There seems to be an error. Please try again!';

const demoTodos: Array<Todo> = [
    {id: 1, title: 'push-ups', description: '', status: true},
    {id: 2, title: 'russian twists', description: 'with 10 kg', status: false},
];

const demoActivities: Array<Activity> = [
    {id: 1, title: 'drink water', description: 'stay hydrated bro', status: false, todoList: []},
    {id: 2, title: 'sport', description: 'do exercises', status: false, todoList: demoTodos},
    {id: 3, title: 'call Saul Goodman for the \'thing\'', description: '', status: false, todoList: []}
];

const initialState = {
    //activities: [], remove comment when BE ready
    activities: demoActivities,
    loading: false,
}

// TODO: replace any with right object type
const reducer = (state=initialState, action: any) => produce (state, (draft) => {
    switch(action.type) {
        case actionTypes.GET_ACTIVITIES_START:
        case actionTypes.CREATE_ACTIVITY_START:
        case actionTypes.UPDATE_ACTIVITY_START:
        case actionTypes.DELETE_ACTIVITY_START:
            draft.loading = true;
            break;

        case actionTypes.GET_ACTIVITIES_SUCCESS:
            draft.activities = action.payload;
            draft.loading = false;
            break;

        case actionTypes.CREATE_ACTIVITY_SUCCESS:
            // @ts-ignore
            draft.activities.push(action.payload);
            draft.loading = false;
            break;

        case actionTypes.UPDATE_ACTIVITY_SUCCESS:
            const updatedActivity:Activity = action.payload;
            // @ts-ignore
            const index = draft.activities.findIndex((activity) => activity.id === updatedActivity.id);

            if(index !== -1) {
                // @ts-ignore
                draft.activities[index] = {...updatedActivity};
            }

            draft.loading = false;
            break;

        case actionTypes.GET_ACTIVITIES_FAIL:
        case actionTypes.CREATE_ACTIVITY_FAIL:
        case actionTypes.UPDATE_ACTIVITY_FAIL:
        case actionTypes.DELETE_ACTIVITY_FAIL:
            const error = action.error ?? genericErrorText;
            draft.loading = false;
            toast.error(error, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            break;
    }
});

export default reducer;