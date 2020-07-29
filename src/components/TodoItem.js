import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const{title}=this.props
    return (
      <div>
        <li className="list-group-item text-capitalize d-flex justify-contebnt-between my-2">
          <h6>{title}</h6>
          <div className="todi-icon">
            <span className="mx-2 text-success">
              <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger">
              <i className="fas fa-trash"></i>
            </span>
            <item />
          </div>
        </li>
      </div>
    );
  }
}
