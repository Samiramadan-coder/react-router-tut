import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';

const Navbar = () => {
  const navLinkStyles = ({isActive}) => {
    if (isActive) {
      return {
        textDecoration: 'none',
        fontWeight: 'bold'
      }
    }
  };

  const auth = useAuth();

  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
      {/* <NavLink style={navLinkStyles} to="/users">
        Users
      </NavLink> */}
      <NavLink style={navLinkStyles} to="/profile">
        Profile
      </NavLink>
      {
        !auth.user && (
          <NavLink style={navLinkStyles} to="/login">
            Login
          </NavLink>
        )
      }
    </nav>
  )
}

export default Navbar;
