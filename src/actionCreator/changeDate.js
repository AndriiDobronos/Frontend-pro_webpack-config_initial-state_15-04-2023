
export default (newDate) => {
    return {
        type: 'CHANGE_DATE',
        payload: {newDate}
    }
}