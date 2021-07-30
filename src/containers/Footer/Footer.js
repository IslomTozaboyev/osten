import React, { Component } from "react";
import "./Footer.css";
import { Button } from "reactstrap";

class Column extends Component {
  render() {
    const {
      column: { title, list, colProps },
    } = this.props;
    console.log(title, list);

    return (
      <div
        className={
          colProps || `col-6 col-sm-6 col-md-4 col-lg-2 py-5 mb-4 mt-5`
        }
      >
        <ul className="fw-bold text-white list-unstyled list-group">
          <li className="title">{title}</li>
          {list.map((value, index) => {
            return (
              <li>
                <a
                  href={value.url}
                  className={`d-block my-1 link ${value.className}`}
                >
                  {value.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default class Footer extends Component {
  render() {
    const { colProps, data } = this.props;

    return (
      <footer className="footer py-5">
        <div className="container py-3">
          <div className="row">
            {this.props.data.map((column, index) => {
              return <Column column={column} colProps={colProps}></Column>;
            })}
          </div>
        </div>
      </footer>
    );
  }
}
