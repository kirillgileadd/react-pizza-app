import React, {useEffect, useState} from "react";
import {Header} from './components/index'
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import {Route, Switch} from "react-router-dom";
import axios from "axios";

function App() {

    const [pizzaItems, setPizzas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then( ({data}) => {
            setPizzas(data.pizzas)
        })
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path="/" render={() => <Home items={pizzaItems}/>}/>
                    <Route path="/cart" render={() => <Cart/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
