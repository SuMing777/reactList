import React, { Component } from "react";
import { listStyleWithRandomColor } from "../utils";

const classNames = {
  list: "list-row",
  grid: "list-row list-area",
};

class NavList extends Component {
  render() {
    const { people, viewSetting, onDelete } = this.props;
    return (
      <ul className="list-table">
        {people.map((item) => (
          <li
            key={item.id}
            className={classNames[viewSetting]}
            style={listStyleWithRandomColor()}
            onDoubleClick={() => {
              onDelete(item.id);
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    );
  }
}

export default NavList;
