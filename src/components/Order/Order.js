import React from 'react'
// import Burger from '../Burger/Burger'
import './Order.css'
const order = props => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ig =>
        <span key={ig.name} style={{
            display: 'inline-block',
            textTransform: 'capitalize',
            padding: '5px',
            border: '1px solid #ccc',
            margin: '0px 8px'
        }}>{ig.name} ({ig.amount}) </span>
    )
    return (
        <div className="Order">
            <p>Ingredients: {ingredientOutput} </p>
            <p>Price: <strong>USD {props.price}</strong></p>
        </div>
    )
};
export default order;