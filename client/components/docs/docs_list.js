import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Docs } from '../../../imports/collections/docs';

class DocsList extends Component {
  onDocRemove(doc) {
    Meteor.call('docs.remove', doc);
  }

  renderList() {
    return this.props.docs.map(doc => {
      return (
        <li className="list-group-item" key={doc._id}>
          Document {doc._id}
          <span className="pull-right">
            <button onClick={() => this.onDocRemove(doc)} className="btn btn-danger">
              Remove
            </button>
          </span>
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
