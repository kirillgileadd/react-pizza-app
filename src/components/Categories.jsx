import React, {memo} from 'react';
import * as PropType from "prop-types";


const Categories = memo(({items, onClickCategory, activeCategory}) => {



    let itemList = items &&
        items
            .map((el, index) => <li
                className={activeCategory === index ? 'active' : ''}
                onClick={() => onClickCategory(index)}
                key={`${el}_${index}`}>{el}</li>)

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {itemList}
            </ul>
        </div>
    );
})


Categories.propTypes = {
    activeCategory: PropType.number,
    items: PropType.array,
    onClickCategory: PropType.func
}

Categories.defaultProps = {
    items: [],
    activeCategory: null
}

export default Categories;