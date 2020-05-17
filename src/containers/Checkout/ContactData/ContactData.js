import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-order';
import './ContactData.css';

var deliveryOptions = [{
    value: "fastest", displayValue: "Fastest"
},
{
    value: "cheapest", displayValue: "Cheapest"
}]
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        street: '',
        postalCode: '',
        loading: false,
        formIsValid: false,
        deliveryMethod: deliveryOptions[0].value
    }
    inputHandler = (e) => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value })
        setTimeout(() => {
            this.checkValidity();
        }, 50);
    }
    checkValidity = () => {
        let form = this.state;
        let valid = form.name !== "" && form.email !== "" && form.postalCode !== "" && form.street !== "";
        this.setState({ formIsValid: valid })
    }
    orderHandler = (e) => {
        e.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.name,
                address: {
                    street: this.state.street,
                    zipCode: this.state.postalCode
                },
                email: this.state.email,
                deliveryMethod: this.state.deliveryMethod
            }
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            }
            )
            .catch(error =>
                this.setState({ loading: false })
            )
    }
    render() {
        let form = <form>
            <div className="Input">
                <input type="text" name="name" required placeholder="Your Name" value={this.state.name} onChange={this.inputHandler} />
            </div>
            <div className="Input">
                <input type="email" name="email" required placeholder="Your email" value={this.state.email} onChange={this.inputHandler} />
            </div>
            <div className="Input">
                <input type="text" name="street" required placeholder="Street" value={this.state.street} onChange={this.inputHandler} />
            </div>
            <div className="Input">
                <input type="text" name="postalCode" required placeholder="Postal Code" value={this.state.postalCode} onChange={this.inputHandler} />
            </div>
            <div className="Input">
                <select name="deliveryMethod" onChange={this.inputHandler}>
                    {deliveryOptions.map(opt =>
                        <option key={opt.value} value={opt.value}>{opt.displayValue}</option>
                    )}
                </select>
            </div>
            <Button btnType="Success" clicked={this.orderHandler} disabled={!this.state.formIsValid}>ORDER</Button>
        </form>
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}
export default ContactData;