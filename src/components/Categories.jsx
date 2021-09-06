import React, {useState} from 'react';

const Categories = ({items}) => {

    const [activeItem, setItem] = useState(null)

    let itemList = items &&
        items
            .map((el, index) => <li
                className={activeItem === index ? 'active' : ''}
                onClick={() => setItem(index)}
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