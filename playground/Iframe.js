import React from "react";

export default class Iframe extends React.Component {
  updateIframe() {
    const iframe = this.iframe;
    let doc = iframe.contentDocument;
    doc.open();
    doc.write(this.props.content);
    doc.close();
  }

  componentDidMount() {
    this.updateIframe();
  }

  componentDidUpdate() {
    this.updateIframe();
  }

  render() {
    return (
      <iframe
        className="w-full h-screen"
        ref={v => {
          this.iframe = v;
        }}
      />
    );
  }
}
