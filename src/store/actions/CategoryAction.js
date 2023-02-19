import { addCategory, DeleteCategory, EditCategory, getCategories } from "../services/CategoryService";

export const GET_CATEGORY = '[Get Category Action] Get Category';
export const ADD_CATEGORY = '[Add Category Action] Add Category';
export const EDIT_CATEGORY = '[Edit Category Action] Edit Category';
export const DELETE_CATEGORY = '[Delete Category Action] Delete Category';

export function getCategoriesAction() {
    return (dispatch, getState) => {
        getCategories().then((response) => {
            dispatch(confirmedGetCategoriesAction(response.data))
        }).catch((err)=>{
            console.log(err)
        });
    };
}

export function confirmedGetCategoriesAction(data) {
    return {
        type: GET_CATEGORY,
        payload: data,
    };
}
export function addCategoryAction(data) {
    return (dispatch, getState) => {
        addCategory(data).then((response) => {
            dispatch(confirmedAddCategoriesAction(response.data))
        }).catch((err)=>{
            console.log(err)
        });
    };
}
export function confirmedAddCategoriesAction(data) {
    return {
        type: ADD_CATEGORY,
        payload: data,
    };
}
export function EditCategoryAction(data) {
    return (dispatch, getState) => {
        EditCategory(data).then((response) => {
            dispatch(confirmedEditCategoriesAction(response.data))
        }).catch((err)=>{
            console.log(err)
        });
    };
}
export function confirmedEditCategoriesAction(data) {
    return {
        type: EDIT_CATEGORY,
        payload: data,
    };
}
export function DeleteCategoryAction(data) {
    return (dispatch, getState) => {
        DeleteCategory(data._id).then((response) => {
            dispatch(confirmedDeleteCategoriesAction(data._id))
            // dispatch(getCategoriesAction())
        }).catch((err)=>{
            console.log(err)
        });
    };
}
export function confirmedDeleteCategoriesAction(data) {
    return {
        type: DELETE_CATEGORY,
        payload: data,
    };
}