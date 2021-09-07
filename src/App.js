import React, {useEffect, useState} from "react";
import {Header} from './components/index'
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import {Route, Switch} from "react-router-dom";

function App() {

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then((json) => setPizzas(json.pizzas))
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path="/" render={() => <Home items={pizzas}/>}/>
                    <Route path="/cart" render={() => <Cart/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
