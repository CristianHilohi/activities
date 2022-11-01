import * as actionTypes from './actionTypes';
import produce from 'immer';
import { toast } from 'react-toastify';

const genericErrorText = 'There seems to be an error. Please try again!';

const initialState = {
    activities: [],
    loading: false,
    error: '',
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

        case actionTypes.GET_ACTIVITIES_FAIL:
        case actionTypes.CREATE_ACTIVITY_FAIL:
        case actionTypes.UPDATE_ACTIVITY_FAIL:
        case actionTypes.DELETE_ACTIVITY_FAIL:
            const error = action.error ?? genericErrorText;
            draft.error = error;
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
})

export default reducer;