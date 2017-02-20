import React, { Component } from 'react';
import Accounts from './accounts';
import { Link } from 'react-router';

class Header extends Component {
  onDocClick(event) {
    event.preventDefault();

    Meteor.call('docs.insert');
  }

  render() {
    return (
      <nav className="nav navbar-inverse">
        <div className="container-fluid">
          <div className="col-xs-12">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Meteowrite</Link>
            </div>
            <div className="navbar-right">
              <ul className="nav navbar-nav">
                <li className="dropdown"><Accounts /></li>
                <li><a href="#" onClick={this.onDocClick.bind(this)}>Create document</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
