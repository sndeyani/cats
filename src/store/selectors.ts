import {State} from "../types";

export const getCategories = (state:{ categories: State }) => state.categories;
export const getImages = (state:{ images: State }) => state.images;