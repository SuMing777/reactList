import React, { Component } from "react";
import NavHeader from "./navHeader";
import NavList from "./navList";
import { sort, debounce, filter } from "../utils/common.js";
import "./style.css";

class Parent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      btnActive: 1,
      persons: [
        { id: 1, text: "Aquamarine" },
        { id: 2, text: "Hotpink" },
        { id: 3, text: "Gold" },
        { id: 4, text: "Crimson" },
        { id: 5, text: "Blueviolet" },
        { id: 6, text: "Lightblue" },
        { id: 7, text: "flowerblue" },
        { id: 8, text: "Skyblue" },
        { id: 9, text: "Burlywood" },
        { id: 10, text: "orangered" },
      ],
      personsAll: null,
    };
    this.onChangeInputValue = debounce(this.onChangeInputValue, 500);
  }

  render() {
    const { activeIndex, btnActive, personsAll, persons } = this.state;
    return (
      <div className="index">
        <NavHeader
          handleClickStyle={this.handleClickStyle}
          activeIndex={activeIndex}
          handleClickBtnStyle={this.handleClickBtnStyle}
          btnActive={btnActive}
          onChangeInputValue={this.onChangeInputValue}
        ></NavHeader>
        <NavList
          handleClickStyle={this.handleClickStyle}
          activeIndex={activeIndex}
          handleClickBtnStyle={this.handleClickBtnStyle}
          btnActive={btnActive}
          persons={personsAll || persons}
        ></NavList>
      </div>
    );
  }

  handleClickStyle = index => {
    this.setState({
      activeIndex: index,
    });
  };

  handleClickBtnStyle = (index, boolean) => {
    const { persons } = this.state;
    this.setState({
      btnActive: index,
      personsAll: sort(persons, boolean),
    });
  };

  onChangeInputValue = value => {
    const { persons } = this.state;
    this.setState({
      personsAll: filter(persons, value)
    });
  };

}

export default Parent;