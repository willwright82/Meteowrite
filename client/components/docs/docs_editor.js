import React, { Component } from 'react'
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class DocsEditor extends Component {
  onEditorChange(content) {
  //console.log(content);
  Meteor.call('docs.update', this.props.doc, content);
}

  render() {
    return (
      <div className="col-sm-6">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.doc.content}
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }}
        />
      </div>
    );
  }
}

export default DocsEditor;
