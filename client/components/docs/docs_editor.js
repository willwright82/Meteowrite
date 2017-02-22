import React, { Component } from 'react'
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class DocsEditor extends Component {
  render() {
    return (
      <div className="col-sm-8">
        <h5>Input</h5>
        <CodeMirror options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    );
  }
}

export default DocsEditor;
