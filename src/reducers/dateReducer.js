
export default (prevDate = new Date(),action) => {
    switch (action.type) {
        case 'CHANGE_DATE':
            return  action.payload.newDate || null
        default:
            return prevDate
    }
}