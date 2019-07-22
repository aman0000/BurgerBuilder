import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import './NavigationItems.css'
const navaigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active> BurgerBuilder </NavigationItem>
        <NavigationItem link="/">Checkout </NavigationItem>
    </ul>
)

export default navaigationItems;