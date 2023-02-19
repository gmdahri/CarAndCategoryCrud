import { USER_LOGIN } from "../actions/UserAction";

const initialState = {
    user: [],
};

export default function userReducer(state = initialState, actions) {
    if (actions.type === USER_LOGIN) {
        return {
            ...state,
            carDetail: actions.payload,
        };
    }
    return state;
}