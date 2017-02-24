import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Docs } from '../../../imports/collections/docs';
import { Link } from 'react-router';

class DocsList extends Component {
  onDocRemove(doc) {
    Meteor.call('docs.remove', doc);
  }

  renderList() {
    return this.props.docs.map(doc => {
      //const url = "/docs/" + doc._id; //ES6 equivalent:
      const url = `/docs/${doc._id}`;

      return (
        <li className="list-group-item" key={doc._id}>
          <Link to={url}>Document {doc._id}</Link>
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
  Meteor.subscribe('sharedDocs');

  return { docs: Docs.find({}).fetch() };
}, DocsList);
