export default ({id, name, description, price, isAvailable, type}) => {
    return {
        type: 'UPDATE_ITEM',
        payload: {
            id, name, description, price, isAvailable, type
        }
    }
}