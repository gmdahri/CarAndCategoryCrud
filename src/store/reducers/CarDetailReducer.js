import { ADD_CAR_DETAIL, DELETE_CAR_DETAIL, EDIT_CAR_DETAIL, GET_CAR_DETAIL } from "../actions/CarDetailAction";


const initialState = {
    carDetail: [],
};

export default function CarDetailReducer(state = initialState, actions) {
    if (actions.type === GET_CAR_DETAIL) {
        return {
            ...state,
            carDetail: actions.payload,
        };
    }
    if (actions.type === ADD_CAR_DETAIL) {
        const arr = [...state.carDetail]
        arr.push(actions.payload)
        return {
            ...state,
            carDetail: arr,
        };
    }
    if (actions.type === EDIT_CAR_DETAIL) {
        const arr = [...state.carDetail];
        const arrIndex = arr.findIndex(
            (element) => element._id === actions.payload._id,
        );

        arr[arrIndex] = actions.payload;
        return {
            ...state,
            carDetail: arr,
        };
    }

    if (actions.type === DELETE_CAR_DETAIL) {
        const arr = [...state.carDetail];
        const arrIndex = arr.findIndex(
            (element) => element._id === actions.payload,
        );
        arr.splice(arrIndex, 1);
        return {
            ...state,
            carDetail: arr,
        };
    }
    return state;
}