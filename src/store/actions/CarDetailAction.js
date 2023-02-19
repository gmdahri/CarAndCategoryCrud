import { addCarDetail, DeleteCarDetail, EditCarDetail, getCarDetails, getCarDetailsByCategory } from "../services/CarDetailService";

export const GET_CAR_DETAIL = '[Get CarDetail Action] Get CarDetail';
export const ADD_CAR_DETAIL = '[Add CarDetail Action] Add CarDetail';
export const EDIT_CAR_DETAIL = '[Edit CarDetail Action] Edit CarDetail';
export const DELETE_CAR_DETAIL = '[Delete CarDetail Action] Delete CarDetail';

export function getCarDetailsAction() {
    return (dispatch, getState) => {
        getCarDetails().then((response) => {
            dispatch(confirmedGetCarDetailsAction(response.data))
        }).catch((err)=>{
            console.log(err)
        });
    };
}

export function confirmedGetCarDetailsAction(data) {
    return {
        type: GET_CAR_DETAIL,
        payload: data,
    };
}
export function addCarDetailAction(data) {
    return (dispatch, getState) => {
        addCarDetail(data).then((response) => {
            dispatch(confirmedAddCarDetailsAction(response.data))
        }).catch((err)=>{
            console.log(err)
        });
    };
}
export function confirmedAddCarDetailsAction(data) {
    return {
        type: ADD_CAR_DETAIL,
        payload: data,
    };
}
export function EditCarDetailAction(data) {
    return (dispatch, getState) => {
        EditCarDetail(data).then((response) => {
            dispatch(confirmedEditCarDetailsAction(response.data))
        }).catch((err)=>{
            console.log(err)
        });
    };
}
export function confirmedEditCarDetailsAction(data) {
    return {
        type: EDIT_CAR_DETAIL,
        payload: data,
    };
}
export function DeleteCarDetailAction(data) {
    return (dispatch, getState) => {
        DeleteCarDetail(data._id).then((response) => {
            dispatch(confirmedDeleteCarDetailsAction(data._id))
        }).catch((err)=>{
            console.log(err)
        });
    };
}
export function confirmedDeleteCarDetailsAction(data) {
    return {
        type: DELETE_CAR_DETAIL,
        payload: data,
    };
}

export function getCarDetailActionByCategory(id) {
    return (dispatch, getState) => {
        getCarDetailsByCategory(id).then((response) => {
            dispatch(confirmedGetCarDetailsAction(response.data))
        }).catch((err)=>{
            console.log(err)
        });
    };
}

