import {
    GET_CATEGORIES_FAILURE, GET_CATEGORIES_PENDING, GET_CATEGORIES_SUCCESS,
    GET_IMAGES_FAILURE, GET_IMAGES_PENDING, GET_IMAGES_SUCCESS,
} from "./actionTypes";
import {Categories, Image} from "../types";

export const getCategoriesPending = () => ({
    type: GET_CATEGORIES_PENDING
})

export const getCategoriesSuccess = (data: Array<Categories>) => ({
    type: GET_CATEGORIES_SUCCESS,
    data
})

export const getCategoriesFailure = () => ({
    type: GET_CATEGORIES_FAILURE,
})



export const getImagesPending = (categoryId: string | undefined, page: number) => ({
    type: GET_IMAGES_PENDING,
    categoryId,
    page
})

export const getImagesSuccess = (data: Array<Image>) => ({
    type: GET_IMAGES_SUCCESS,
    data
})

export const getImagesFailure = () => ({
    type: GET_IMAGES_FAILURE,
})