import {
    GET_CATEGORIES_FAILURE, GET_CATEGORIES_PENDING, GET_CATEGORIES_SUCCESS,
    GET_IMAGES_FAILURE, GET_IMAGES_PENDING, GET_IMAGES_SUCCESS,
} from './actionTypes';

const initialState = {
    categories: [],
    images: [],
    loadCategories: false,
    loadImages: false,
    error: null
}

export const categories = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_CATEGORIES_PENDING:
            return {
                ...state,
                error: null,
                loadCategories: true,
            };

        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loadCategories: false,
                categories: action.data
            }

        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                loadCategories: false,
                error: action.error,
            };

        default:
            return state;
    }
};


export const images = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_IMAGES_PENDING:
            return {
                ...state,
                error: null,
                loadImages: true,
            };

        case GET_IMAGES_SUCCESS:
            return {
                ...state,
                loadImages: false,
                images: [...state.images, ...action.data]
            }

        case GET_IMAGES_FAILURE:
            return {
                ...state,
                isLoading: false,
                loadImages: action.error,
            };

        default:
            return state;
    }
};
