import pizzasReducer from "./pizzas";
import filterReducer from "./filters";
import {combineReducers} from "redux";


const rootReducers = combineReducers({
    pizzas: pizzasReducer,
    filter: filterReducer
})

export default rootReducers



