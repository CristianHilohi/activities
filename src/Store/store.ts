import activitiesReducer from "./activitiesReducer";
import {combineReducers, applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    activities: activitiesReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;