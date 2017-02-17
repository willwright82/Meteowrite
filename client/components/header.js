import React, { Component } from 'react';
import Accounts from './accounts';

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
              <a className="navbar-brand" href="">Meteowrite</a>
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
