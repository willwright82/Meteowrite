import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Docs } from '../../../imports/collections/docs';
import DocsEditor from './docs_editor';
import DocsViewer from './docs_viewer';

class DocsMain extends Component {
  render() {
    //console.log(this.props.params.docId);
    if (!this.props.doc) {
      return(
        <div className="col-sm-6">
          <h5>Loading...</h5>
        </div>
      );
    }
    return (
      <div>
        <DocsEditor doc={this.props.doc} />
        <DocsViewer doc={this.props.doc} />
      </div>
    );
  }
}

export default createContainer((props) => {
  const { docId } = props.params;
  Meteor.subscribe('docs');

  return { doc: Docs.findOne(docId) };
}, DocsMain);
