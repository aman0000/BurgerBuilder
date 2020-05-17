import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
const navaigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/"> BurgerBuilder </NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
)

export default navaigationItems;