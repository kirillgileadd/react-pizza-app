import pizzas from "./pizzas";
import filter from "./filters";
import cart from "./cart";
import {combineReducers} from "redux";



const rootReducers = combineReducers({
    pizzas,
    filter,
    cart
})

export default rootReducers



