import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import {combineReducers} from "redux";
import {categories, images} from "./reducers";
import {getCategories, getImages} from "./sagas";

const reducer = combineReducers({
    categories,
    images
})

const sagas =  function* rootSaga() {
    yield all([
        getCategories(),
        getImages()
    ])
}

const initialState = {};
const sagaMiddleware = createSagaMiddleware();


export default configureStore({
        reducer,
    // @ts-ignore
        initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    }
);

sagaMiddleware.run(sagas);
