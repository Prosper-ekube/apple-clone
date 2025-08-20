import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Mac from '../pages/mac/Mac';
import IPad from '../pages/ipad/IPad';
import IPhone from '../pages/iphone/IPhone';
import Support from '../pages/Support';
import WhereToBuy from '../pages/where-to-buy/WhereToBuy';

const RoutesContainer = () => {
    const location = useLocation();

    return (
        <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Home />} />
            <Route path='/mac' element={<Mac/>} />
            < Route path = '/ipad' element = {<IPad/>} />
            < Route path = '/iphone' element = {<IPhone/>} />
            < Route path = '/support' element = {<Support/>} />
            <Route path='/where-to-buy' element={<WhereToBuy/>} />
        </Routes>
    )
}

export default RoutesContainer