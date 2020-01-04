import React from 'react';
import './Header.css';
import Link from "../link/Link";

const Header = ({logo}) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link url={"https://reactjs.org"} linkTitle={'React Application'} />
    </header>
  );
};

export default Header;
