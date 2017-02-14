import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand" href="">Meteowrite</a>
        </div>
        <ul className="nav navbar-nav">
          <li><a href="">Sign up</a></li>
          <li><a href="">Create document</a></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
