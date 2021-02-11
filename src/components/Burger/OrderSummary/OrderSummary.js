import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // @TODO: This can be refactored to a functional component in the future; doesn't have state
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[OrderSummary] DidUpdate');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((ingredient, i) => {
                return (
                    <li key={i}>
                        <span style={{ textTransform: "capitalize" }}>{ingredient}: {this.props.ingredients[ingredient]}</span>
                    </li>
                );
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button
                    btnType="Danger"
                    clicked={this.props.purchaseCanceled}
                >
                    CANCEL
                </Button>
                <Button
                    btnType="Success"
                    clicked={this.props.purchaseContinued}
                >
                    CONTINUE
                </Button>
            </Aux>
        );
    }
}

export default OrderSummary;
