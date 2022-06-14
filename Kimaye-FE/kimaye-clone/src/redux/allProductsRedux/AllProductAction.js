import axios from "axios";
export const GET_DATA = "GET_DATA";
export const IS_ERROR = "IS_ERROR";
export const IS_LOADING = "IS_LOADING";

export const getRequest = (dispatch) => {
  dispatch({ type: IS_LOADING });
  axios
    .get("http://localhost:8080/allfruits")
    .then(({ data }) => {
      dispatch({
        type: GET_DATA,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({ type: IS_ERROR });
    });
};
