import React from 'react';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(
        igkey => {
            return <li key={igkey}>
                <span style={{ textTransform: 'capitalize' }}>{igkey}</span>: {props.ingredients[igkey]}
            </li>
        }
    );
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delecious burger with the following elements:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: ${props.price}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </React.Fragment>
    )
}

export default orderSummary;