import axios from "axios";

const baseURl = 'http://localhost:8082/'
export function getCategories() {
    //axios call
    return axios.get(
        baseURl+"category"
    );
}
export function addCategory(payload) {
    //axios call
    return axios.post(
        baseURl+"category",
        payload
    );
}
export function EditCategory(payload) {
    //axios call
    return axios.put(
        baseURl+`category/${payload.id}`,
        payload
    );
}
export function DeleteCategory(id) {
    //axios call
    return axios.delete(
        baseURl+`category/${id}`,
    );
}