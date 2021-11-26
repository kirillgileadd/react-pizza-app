import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";
import {addPizzaToCart} from "../redux/actions/cart";


const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые', 'Детские']
const sortItems = [
    {name: 'популярности', type: "rating", order: 'desc'},
    {name: 'цене', type: "price", order: 'desc'},
    {name: 'алфовиту', type: 'name', order: 'asc'},]

const Home = () => {

    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filter}) => filter)
    const pizzasQuantity = useSelector(({cart}) => cart.items)


    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch])

    const onSelectActiveType = useCallback((index) => {
        dispatch(setSortBy(index))
    }, [dispatch])

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [dispatch, category, sortBy])


    let pizzasItems = isLoaded ? items.map((el, index) => <PizzaBlock
            onClickAddPizza={handleAddPizzaToCart}
            pizzasQuantity={pizzasQuantity[el.id] && pizzasQuantity[el.id].items.length}
            key={el.id} {...el} />) :
        Array(4).fill(0).map((_, index) => <LoadingBlock key={index}>{_}</LoadingBlock>)

    return (
        <div>
            <div className="container">
                <div className='content__top-box'>
                    <div className="content__top">
                        <Categories items={categoryNames}
                                    onClickCategory={onSelectCategory}
                                    activeCategory={category}/>
                        <SortPopup items={sortItems}
                                   onClickType={onSelectActiveType}
                                   activeSortType={sortBy.type}/>
                    </div>
                </div>
                <h2 className="content__title">Пиццы</h2>
                <div className="content__items">
                    {!pizzasItems.length ? (<div className="noPizzas">Закончились :(</div>) : pizzasItems}
                </div>
            </div>
        </div>
    );
};

export default Home;