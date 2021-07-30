import "./UniversalTheme.css";

import React, { Component } from "react";

export default class UniversalTheme extends Component {
  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}
