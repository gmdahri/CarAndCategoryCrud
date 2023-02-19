import axios from "axios";

const baseURl = 'http://localhost:8082/'
export function getCarDetails() {
    //axios call
    return axios.get(
        baseURl+"cardetail"
    );
}
export function getCarDetailsByCategory(id) {
    //axios call
    return axios.get(
        baseURl+`cardetail/${id}`
    );
}
export function addCarDetail(payload) {
    //axios call
    return axios.post(
        baseURl+"cardetail",
        payload
    );
}
export function EditCarDetail(payload) {
    //axios call
    return axios.patch(
        baseURl+`cardetail/${payload.id}`,
        payload
    );
}
export function DeleteCarDetail(id) {
    //axios call
    return axios.delete(
        baseURl+`cardetail/${id}`,
    );
}