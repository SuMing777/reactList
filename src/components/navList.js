import React, { Component } from "react";
import { listStyle } from "../utils/common.js";

class NavList extends Component {

  render() {
    const { persons, activeIndex } = this.props;
    return (
      <ul className="list-table">
        {
          persons.map((item) => {
            return (
              <li
                key={item.id}
                className={activeIndex === 1 ? "list-row" : "list-row list-area"}
                style={listStyle()}
              >{item.text}</li>
            );
          })
        }
      </ul>
    );
  }

}

export default NavList;