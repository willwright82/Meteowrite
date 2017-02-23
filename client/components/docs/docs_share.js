import React, { Component } from 'react';

class DocsShare extends Component {
  render() {
    return (
      <footer className="docs-share">
        <div className="input-group">
          <input className="form-control" type="text" />
          <div className="input-group-btn">
            <button className="btn btn-default">Share Document</button>
          </div>
        </div>
      </footer>
    );
  }
}

export default DocsShare;
