import axios from "axios";
import { userActions } from "../redux";

//const URL_MAIN = "http://192.168.1.106:8082";
export const URL_MAIN = "https://warm-wave-45384.herokuapp.com/";

export const configureAxios = store => {
    const { dispatch } = store;
    axios.create({ withCredentials: false, })

    axios.defaults.baseURL = URL_MAIN;
    axios.interceptors.request.use(
        opt => {
            const token = window.localStorage.getItem("access_token");

            if (token) {
                opt.headers.Authorization = "Bearer " + (token || "");
            }

            return opt;
        },
        error => Promise.reject(error)
    );

    axios.interceptors.response.use(
        response => {
            // if for some reason we would need to augment the response, we  could do it here
            return response;
        },
        error => {
            if (!error.response) return Promise.reject(new Error("Network error"));

            // TODO: figure out the way to handle errors before reducer
            if (error.response.status === 400) {
                // Bad request
                return Promise.reject(new Error("Bad Request"));
            }
            if (error.response.status === 401) {
                // Unauthorized
                dispatch(userActions.logout());
                return Promise.reject(new Error("Unauthorized"));
            }
            if (error.response.status === 500) {
                // Internal Server Error (i.e. BUG)
                return Promise.reject(new Error("Internal server error"));
            }

            return Promise.reject(error);
        }
    );
};
