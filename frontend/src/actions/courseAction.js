import axios from "axios"
import { ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, ALL_COURSE_FAIL, CLEAR_ERRORS } from "../constants/courseConstants"

export const getCourse = () =>
    async (dispatch) => {
        try {
            dispatch({
                type: ALL_COURSE_REQUEST,
            });

            const { data } = await axios.get("/api/v1/courses");
            dispatch({
                type: ALL_COURSE_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_COURSE_FAIL,
                payload: error.response.data.message,
            });
        }
    };


//Clearing ERRORS
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
