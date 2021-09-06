import React, {useState} from 'react';

// class Categories extends React.Component {
//
//     state = {
//         activeItem: 3
//     }
//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index,
//         })
//     }
//     render() {
//         const {items, onClick} = this.props
//         let itemList = items.map((el, index) => <li onClick={() => this.onSelectItem(index)}
//                                                     key={`${el}_${index}`}
//                                                     className={this.state.activeItem === index ? 'active' : ''}>{el}</li>)
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {itemList}
//                 </ul>
//             </div>
//         )
//     }
// }


const Categories = ({items}) => {

    const [activeItem, setItem] = useState(null)

    let itemList = items &&
        items.map((el, index) => <li className={activeItem === index ? 'active' : ''}
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