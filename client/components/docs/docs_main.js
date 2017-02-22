import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Docs } from '../../../imports/collections/docs';
import DocsEditor from './docs_editor';

class DocsMain extends Component {
  render() {
    //console.log(this.props.params.docId);
    return (
      <div>
        <DocsEditor doc={this.props.doc} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { docId } = props.params;
  Meteor.subscribe('docs');

  return { doc: Docs.findOne(docId) };
}, DocsMain);
