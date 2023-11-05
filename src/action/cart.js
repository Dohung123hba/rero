export const addToCart = (id, info) => {
    return{
        type: "ADD_TO_CARD",
        id: id,
        info: info
    }
}

export const upQuantity = (id, quantity = 1) => {
    return{
        type: "UP_QUANTITY",
        id: id,
        quantity: quantity
    }
}

export const deleteAll = () => {
    return{
        type: "DELETE_ALL",
    }
}

export const deleteOne = (id) => {
    return{
        type: "DELETE_ONE",
        id: id
    }
}