import React from 'react';
import { Link, NavLink  } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='ui based very padded segment' >
            <Link to='/' className='ui teal inverted segment' >FAI</Link>
            <div className='ui right floated header' >
                <button className='ui button' ><NavLink to="/">Home</NavLink></button>
                <button className='ui button' ><NavLink to="/about">About</NavLink></button>
                <button className='ui button' ><Link to="/contact">Contact</Link></button>
                <button className='ui primary inverted button'><Link to="/login">Login</Link></button>
            </div>
        </nav>
    )
}
export default Navbar