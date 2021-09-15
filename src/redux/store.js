import {applyMiddleware, compose, createStore} from "redux";
import rootReducers from "./redusers";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

window.store = store


export default store