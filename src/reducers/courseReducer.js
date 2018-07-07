import * as types from '../actions/actionTypes';

export const courseReducer = (state = [], action) => {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;

        default:
            return state;
    }
};