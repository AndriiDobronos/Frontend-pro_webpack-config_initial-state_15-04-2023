import changeLanguage from "./changeLanguage.js";

export default (newLanguage) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(changeLanguage(newLanguage))
        },3000)
    }
}