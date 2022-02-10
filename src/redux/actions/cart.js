

export const addPizzaToCart = (pizzaOBj) => ({
  type: "ADD_PIZZA_TO_CART",
  payload: pizzaOBj
})

export const clearCartAction = () => ({
  type: "CLEAR_CART"
})

export const removeCartItem = (id) => ({
  type: "REMOVE_CART_ITEM",
  payload: id
})