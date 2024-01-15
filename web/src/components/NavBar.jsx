import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between'>
      <NavLink to="/">
        <div>
          <img src='' alt='Logo'></img>
        </div>
        <div>
          <p>Home</p>

        </div>
      </NavLink>
      <NavLink to="/cart">
        <div>
          <p><MdShoppingCart /></p>
        </div>
      </NavLink>
    </div>
  );
};

export default NavBar;
