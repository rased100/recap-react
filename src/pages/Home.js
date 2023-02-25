import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div className='routingCont'>
                <h2>Home Page</h2>
                <Link to={'/login'}>Login</Link>
            </div>
            <div className='nestedRoutingCont'>
                <div className='nestedRouting'>
                    <h4>Nested Routing</h4>
                    <div className='items'>
                        <Link to={'item1'} className='item'>item 1</Link>
                        <Link to={'item2'} className='item'>item 2</Link>
                        <Link to={'item3'} className='item'>item 3</Link>
                    </div>
                </div>
                <div className='outlet'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;