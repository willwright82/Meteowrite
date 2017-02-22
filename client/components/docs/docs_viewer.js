import React, { Component } from 'react';
import { markdown } from 'markdown';

class DocsViewer extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.doc.content);

    return (
      <div className="col-sm-6">
        <h5>Output</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>
    );
  }
}

export default DocsViewer;
