import { ADD_CATEGORY, DELETE_CATEGORY, EDIT_CATEGORY, GET_CATEGORY } from "../actions/CategoryAction";


const initialState = {
    categories: [],
};

export default function CategoryReducer(state = initialState, actions) {
    if (actions.type === GET_CATEGORY) {
        return {
            ...state,
            categories: actions.payload,
        };
    }
    if (actions.type === ADD_CATEGORY) {
        const arr = [...state.categories]
        arr.push(actions.payload)
        return {
            ...state,
            categories: arr,
        };
    }
    if (actions.type === EDIT_CATEGORY) {
        const arr = [...state.categories];
        const arrIndex = arr.findIndex(
            (element) => element._id === actions.payload._id,
        );

        arr[arrIndex] = actions.payload;
        return {
            ...state,
            categories: arr,
        };
    }

    if (actions.type === DELETE_CATEGORY) {
        const arr = [...state.categories];
        const arrIndex = arr.findIndex(
            (element) => element._id === actions.payload,
        );
        arr.splice(arrIndex, 1);
        return {
            ...state,
            categories: arr,
        };
    }
    return state;
}