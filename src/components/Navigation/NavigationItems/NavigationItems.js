import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link={"/"} active>Burger_Builder&nbsp;</NavigationItem>
        {/* <li>&nbsp;</li>
        <li>&nbsp;</li> */}
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;