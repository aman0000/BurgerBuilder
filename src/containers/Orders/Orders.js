import React, { Component } from 'react'
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
class Orders extends Component {
    state = {
        orders: [],
        error: false
    }
    componentDidMount() {
        axios.get("/orders.json")
            .then(res => {
                let fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ orders: fetchedOrders })
            })
            .catch(err => this.setState({ error: true }))
    }
    render() {
        return (
            <div>
                {this.state.orders.map(order =>
                    <Order key={order.id} {...order} />
                )}

            </div>
        );
    }
}
export default Orders