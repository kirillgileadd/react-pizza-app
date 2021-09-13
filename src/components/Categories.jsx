import React, {useState} from 'react';

const Categories = ({items, onClickItem}) => {

    const [activeItem, setItem] = useState(null)

    const onSelectItem = (index) => {
        setItem(index)
        onClickItem(index)
    }

    let itemList = items &&
        items
            .map((el, index) => <li
                className={activeItem === index ? 'active' : ''}
                onClick={() => onSelectItem(index)}
                key={`${el}_${index}`}>{el}</li>)

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => setItem(null)}>Все</li>
                {itemList}
            </ul>
        </div>
    );
}

export default Categories;