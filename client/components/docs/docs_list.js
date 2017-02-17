import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Docs } from '../../../imports/collections/docs';

class DocsList extends Component {
  renderList() {
    return this.props.docs.map(doc => {
      return (
        <li className="list-group-item" key={doc._id}>
          Document {doc._id}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('docs');

  return { docs: Docs.find({}).fetch() };
}, DocsList);
