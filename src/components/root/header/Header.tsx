import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
import './header.scss';

export const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="header-heading is-white-text">
          <div className="column">
            <img className="header-logo" src={logo} alt="logo" />
          </div>
          <div className="column">
            <h3>Marketplace</h3>
          </div>
        </NavLink>
      </div>
    </header>
  );
};
