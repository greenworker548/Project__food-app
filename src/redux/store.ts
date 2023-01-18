import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga"
import rootWatcher from ".";
import postReducer from "./reducers/postReducers";
import shopReducer from "./reducers/shopReducers";
import settingsReducers from "./reducers/settingsReducers"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    postReducer,
    shopReducer,
    settingsReducers
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)