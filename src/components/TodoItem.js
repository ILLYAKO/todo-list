import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete,handleEdit } = this.props;
    return (
      <div>
        <li className="list-group-item text-capitalize d-flex justify-contebnt-between my-2">
          <h6>{title}</h6>
          <div className="todi-icon">
            <span
              style={{ cursor: "pointer" }}
              className="mx-2 text-success"
              onClick={handleEdit}
            >
              <i className="fas fa-pen">Edit</i>
            </span>
            <span
              style={{ cursor: "pointer" }}
              className="mx-2 text-danger"
              onClick={handleDelete}
            >
              <i className="fas fa-trash">Delete</i>
            </span>
          </div>
        </li>
      </div>
    );
  }
}
