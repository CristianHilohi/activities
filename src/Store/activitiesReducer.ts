import * as actionTypes from './actionTypes';
import produce from 'immer';

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
            draft.error = action.error;
            draft.loading = false;
            break;
    }
})

export default reducer;