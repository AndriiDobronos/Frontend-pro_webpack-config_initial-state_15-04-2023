export default (prevElements = [],action) => {
    switch (action.type) {
        case 'ADD_NEW_ITEM':
            return [...prevElements,{...action.payload} ]
        case 'UPDATE_ITEM':
            const elementIndex = prevElements.findIndex(el => el.id === action.payload.id)
            return [...prevElements.slice(0,elementIndex),
                action.payload,
                ...prevElements.slice(elementIndex + 1)
            ]
        case 'SET_ITEMS':
            return action.payload.items
        default:
            return prevElements
    }
}