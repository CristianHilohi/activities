import * as actionTypes from './actionTypes';
import produce from 'immer';
import { toast } from 'react-toastify';
import {Todo} from '../Models';

const genericErrorText = 'There seems to be an error. Please try again!';

const initialState = {
    loading: false,
}

const reducer = (state=initialState, action: any) => produce (state, (draft) => {
    switch (action.type) {
        case actionTypes.CREATE_TODO_START:
        case actionTypes.UPDATE_TODO_START:
        case actionTypes.DELETE_TODO_START:
            draft.loading = true;
            break;

        case actionTypes.CREATE_TODO_FAIL:
        case actionTypes.UPDATE_TODO_START:
        case actionTypes.DELETE_TODO_START:
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