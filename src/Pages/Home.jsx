import React from 'react';
import {Categories, SortPopup} from "../components";
import PizzaBlock from "../components/PizzaBlock";

const Home = ({items}) => {

    let pizzasItems = items.map((el, index) => <PizzaBlock key={el.id} {...el}/>)

    return (
        <div>
            <div className="container">
                <div className="content__top">
                    <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                    <SortPopup items={[
                        {name: 'популярности', type: "popular"},
                        {name: 'цене', type: "price"},
                        {name: 'алфовиту', type: 'alphabet'},]}/>
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