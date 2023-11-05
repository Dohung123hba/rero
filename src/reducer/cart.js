const cartReducer = (state = [], action) => {
    let newState = [...state]
    switch (action.type) {
        case "ADD_TO_CARD":
            return[
                ...state,
                {
                    id: action.id,
                    info: action.info,
                    quantity: 1
                }
            ]
        case "UP_QUANTITY":
            const itemUpdate = newState.find(item => item.id === action.id)
            itemUpdate.quantity = itemUpdate.quantity + action.quantity;
            return newState
        case "DELETE_ALL":
            return []
        case "DELETE_ONE":
            newState = newState.filter(item => item.id !== action.id)
            return newState
        default:
            break;
    }
    return state
}
export default cartReducer