import axios from "axios";

const baseURl = 'http://localhost:8082/'
export function login(payload) {
    //axios call
    return axios.post(
        baseURl+"user/login",
        payload
    );
}
export function signup(payload) {
    //axios call
    return axios.post(
        baseURl+"user/signup",
        payload
    );
}