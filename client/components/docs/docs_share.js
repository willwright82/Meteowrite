import React, { Component } from 'react';

class DocsShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;
  }

  render() {
    return (
      <footer className="docs-share">
        <div className="input-group">
          <input ref="email" className="form-control" type="text" />
          <div className="input-group-btn">
            <button
              onClick={this.onShareClick.bind(this)}
              className="btn btn-default">
              Share Document
            </button>
          </div>
        </div>
      </footer>
    );
  }
}

export default DocsShare;
