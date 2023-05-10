
export default (newLanguage) => {
    return {
        type: 'CHANGE_LANGUAGE',
        payload: {
            newLanguage
        }
    }
}