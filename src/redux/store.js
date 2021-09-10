import {createStore, combineReducers} from "redux";
import pizzasReducer from "./redusers/pizzas";
import filterReducer from "./redusers/filters";


const rootReducers = combineReducers({
    pizzasReducer,
    filterReducer
})

const store = createStore(rootReducers)

export default store