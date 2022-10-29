import axios from "axios";

import {call,  put, takeLatest } from 'redux-saga/effects';
import {
    getCategoriesFailure,
    getCategoriesSuccess, getImagesFailure, getImagesSuccess
} from './actions';
import {
    GET_CATEGORIES_PENDING,
    GET_IMAGES_PENDING
} from './actionTypes';
// import { request } from '../../utils/api';
// import {getCompany, getCurrentUser} from "utils/auth";


const request = () => axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
});

function* getCategoriesWorker(): any {
    try {
        const {data} = yield call(request().get, '/categories');
        yield put(getCategoriesSuccess(data))
    } catch (error) {
        yield put(getCategoriesFailure());
    }
}

export function* getCategories(){
    yield takeLatest(GET_CATEGORIES_PENDING, getCategoriesWorker);
}


function* getImagesWorker(payload: any): any {
    const {categoryId, page} = payload;

    try {
        const {data} = yield call(request().get, `/images/search?limit=10&page=${page}&category_ids=${categoryId || ''}` );
        yield put(getImagesSuccess(data))
    } catch (error) {
        yield put(getImagesFailure());
    }
}

export function* getImages(){
    yield takeLatest(GET_IMAGES_PENDING, getImagesWorker);
}








