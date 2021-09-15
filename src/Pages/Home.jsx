import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import ContentLoader from "react-content-loader";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: "popular"},
    {name: 'цене', type: "price"},
    {name: 'алфовиту', type: 'alphabet'},]

const Home = () => {

    const dispatch = useDispatch()

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)


    useEffect(() => {
        dispatch(fetchPizzas())
    }, [])


    let pizzasItems = isLoaded
        ? items.map((el, index) => <PizzaBlock key={el.id} {...el}/>)
        : Array(10).fill(<LoadingBlock/>)


    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={categoryNames}
                                onClickItem={onSelectCategory}/>
                    <SortPopup items={sortItems}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {pizzasItems}
                </div>
            </div>
        </div>
    );
};

export default Home;