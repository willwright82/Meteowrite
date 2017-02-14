import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  componentDidMount() {
    // Render the Blaze accounts form
    // find div rendered in the `render` method
    // and place the Blaze accounts form in that div
    this.view = Blaze.render( // this.view is a reference to rendered Blaze template
      Template.loginButtons, // Login Forms from Blaze rendered
      ReactDOM.findDOMNode(this.refs.container) // to ref="container"
    );
  }

  componentWillUnmount() {
    // Find the form we created
    // Destroy the forms
    // Clean up the forms
    Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;
