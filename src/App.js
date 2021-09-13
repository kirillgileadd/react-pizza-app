import React, {useEffect, useState} from "react";
import {Header} from './components/index'
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import {Route, Switch} from "react-router-dom";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";
import store from "./redux/store";
import {connect} from "react-redux";

//
// function App() {
//
//     const [pizzaItems, setPizzas] = useState([])
//
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then( ({data}) => {
//             setPizzas(data.pizzas)
//         })
//     }, [])
//
//
//     return ;
// }

class App extends React.Component {



    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setPizzas(data.pizzas)
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Switch>
                        <Route exact path="/" render={() => <Home items={this.props.items}/>}/>
                        <Route path="/cart" render={() => <Cart/>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPizzas: (items) => dispatch(setPizzas(items))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);


