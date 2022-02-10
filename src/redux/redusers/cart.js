const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTP = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_TO_CART": {

            const currentItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload]

            let newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentItems,
                    totalPrice: getTP(currentItems)
                }
            }
            let items = Object.values(newItems).map((obj) => obj.items)
            const allPizzas = [].concat.apply([], items)
            const totalPrice = getTP(allPizzas)

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            }
        }
        case 'CLEAR_CART': {
            return {
                ...state,
                items: {}, totalPrice: 0,
                totalCount: 0
            }
        }
        case 'REMOVE_CART_ITEM': {
            let itemsCopy = {
                ...state.items
            }
            const currentTotalPrice = itemsCopy[action.payload].totalPrice
            const currentTotalCount = itemsCopy[action.payload].items.length
            delete itemsCopy[action.payload]
            return {
                ...state,
                items: itemsCopy,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }
        default:
            return state
    }
}

export default cart