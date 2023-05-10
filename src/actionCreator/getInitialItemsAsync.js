import getInitialItems from "./getInitialItems.js";

export default items => {
    return(dispatch) => {
        fetch('http://localhost:5556/items')
            .then(response => response.json())
            .then(items => {
                const action = getInitialItems(items)
                dispatch(action)
            })
    }
}