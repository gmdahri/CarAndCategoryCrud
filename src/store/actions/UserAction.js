import swal from "sweetalert";
import { login, signup } from "../services/UserService";
export const USER_LOGIN = '[User Login Action] User Login';
export const USER_SIGN_UP = '[User Sign up Action] User sign up';

export function userLoginAction(data, navigate) {
    return (dispatch, getState) => {
        login(data).then((response) => {
            dispatch(ConfirmedUserLogin(response.data))
            navigate('/home')
        }).catch((err)=>{
            formatError(err.response.data.message)
        });
    };
}

export function ConfirmedUserLogin(data) {
    return {
        type: USER_LOGIN,
        payload: data,
    };
}
export function userSignUpAction(data, navigate) {
    return (dispatch, getState) => {
        signup(data).then((response) => {
            navigate('/login')
        }).catch((err)=>{
            const flag = formatError(err.response.data)
            return flag
        });
    };
}
 function formatError(errorResponse) {
    console.log('error', errorResponse)
    switch (errorResponse.message) {
        
        default:
            console.log('hi2')
            swal({
                title: "Error!",
                text: errorResponse.message,
                icon: "error",
                button: "Try Again!",
              });
            return false;
    }
}