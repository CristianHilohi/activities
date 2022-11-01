import activitiesReducer from "./activitiesReducer";
import {combineReducers, applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk';
import todosReducer from "./TodosReducer";


const rootReducer = combineReducers({
    activities: activitiesReducer,
    todos: todosReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;