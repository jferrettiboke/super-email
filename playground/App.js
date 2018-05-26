import React from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/jsx";
import "brace/theme/dracula";

import Iframe from "./Iframe";
import {
  renderToHtml,
  Email,
  Container,
  Row,
  Column,
  Box,
  Text,
  Image,
  Link
} from "../src";
import example from "./example.js";

window.React = React;
window.Email = Email;
window.Container = Container;
window.Row = Row;
window.Column = Column;
window.Box = Box;
window.Text = Text;
window.Image = Image;
window.Link = Link;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "", content: "", editor: { value: example } };
  }

  transform(code) {
    try {
      const content = renderToHtml(
        eval(
          window.Babel.transform(code, {
            presets: ["react"],
            plugins: ["transform-object-rest-spread"]
          }).code
        )
      );
      this.setState((prevState, props) => ({
        ...prevState,
        error: false,
        content
      }));
    } catch (error) {
      this.setState((prevState, props) => ({
        ...prevState,
        error: error.stack
      }));
    }
  }

  onEditorChange(newValue) {
    this.transform(newValue);
    this.setState({ editor: { value: newValue } });
  }

  componentDidMount() {
    this.setState((prevState, props) => ({
      ...prevState,
      editor: {
        value: this.state.editor.value
      }
    }));
  }

  render() {
    return (
      <div className="flex h-screen">
        <div className="w-full lg:w-1/2 lg:border-r">
          <AceEditor
            mode="jsx"
            theme="dracula"
            onChange={this.onEditorChange.bind(this)}
            name="editor"
            editorProps={{ $blockScrolling: true }}
            defaultValue={this.state.editor.value}
            value={this.state.editor.value}
            style={{ width: "100%", height: "100%", minHeight: "100%" }}
            onValidate={() => this.transform(this.state.editor.value)}
          />
        </div>
        <div className="w-full lg:w-1/2 relative">
          {this.state.error && (
            <pre className="p-4 bg-red text-white mb-4 absolute pin h-full w-full z-50 text-sm leading-normal overflow-x-scroll">
              {this.state.error}
            </pre>
          )}
          <Iframe content={this.state.content} />
        </div>
      </div>
    );
  }
}
