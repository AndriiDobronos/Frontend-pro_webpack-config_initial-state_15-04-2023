
export default ({id, name, description, price, isAvailable, type}) => {
    return {
        type: 'ADD_NEW_ITEM',
        payload: {
            id, name, description, price, isAvailable, type
        }
    }
}
