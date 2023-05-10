
export default (prevLanguage = 'ua',action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return  action.payload.newLanguage
        default:
            return prevLanguage
    }
}