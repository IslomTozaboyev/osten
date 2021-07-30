import "./Connet.css";

import React, { Component } from "react";

export default class Connet extends Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}
