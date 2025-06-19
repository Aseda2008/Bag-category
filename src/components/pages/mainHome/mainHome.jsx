import React from 'react';
import Home from '../home/home';
import Bag from '../Bag/Bag';
import Category from '../category/category';
import Product from '../product/product';

const MainHome = () => {
    return (
        <div>
            <Home />
            <Category />
            <Bag />
            <Product />
        </div>
    );
};

export default MainHome;