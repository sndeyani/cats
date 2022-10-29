
export type Categories = {
    id: number
    name: string
}

export type Image = {
    height?: number
    id: string | number
    url: string
    width?: number
}

export type State = {
    categories: Array<Categories>,
    images: Array<Image>,
    loadCategories: boolean,
    loadImages: boolean,
    error: null | string | undefined
}