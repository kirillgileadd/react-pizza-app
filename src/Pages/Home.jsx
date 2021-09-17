import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name: 'популярности', type: "rating",  order: 'desc'},
    {name: 'цене', type: "price",  order: 'desc'},
    {name: 'алфовиту', type: 'name', order: 'asc' },]

const Home = () => {

    const dispatch = useDispatch()
    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy} = useSelector(({filter}) => filter)


    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectActiveType = useCallback( (index) => {
        dispatch(setSortBy(index))
    }, [])

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])


    let pizzasItems = isLoaded
        ? items.map((el, index) => <PizzaBlock key={el.id} {...el}/>)
        : Array(10).fill(0).map((_, index) => <LoadingBlock key={index}/>)


    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={categoryNames}
                                onClickCategory={onSelectCategory}
                                activeCategory={category}/>
                    <SortPopup items={sortItems}
                               onClickType={onSelectActiveType}
                               activeSortType={sortBy.type}/>
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