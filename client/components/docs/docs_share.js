import React, { Component } from 'react';

class DocsShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;
    Meteor.call('docs.share', this.props.doc, email);
  }

  renderShareList() {
    return this.props.doc.sharedWith.map(email => {
      return <button
        key={email}
        className="btn btn-default">
          {email}
        </button>
    });
  }

  render() {
    return (
      <footer className="docs-share">
        <div className="input-group">
          <input ref="email" className="form-control" type="email" />
          <div className="input-group-btn">
            <button
              onClick={this.onShareClick.bind(this)}
              className="btn btn-default">
              Share Document
            </button>
          </div>
        </div>
        <div>Shared With:</div>
        <div className="btn-group">
          {this.renderShareList()}
        </div>
      </footer>
    );
  }
}

export default DocsShare;
