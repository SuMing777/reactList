import React, { Component } from "react";
import NavHeader from "./navHeader";
import NavList from "./navList";
import { debounce, filter, sort } from "../utils";
import "./style.css";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewSetting: "list", // list, grid 未来也许会有更多布局，用名字更直观
      isDesc: false, // 这东西只是个布尔值，没必要用index
      searchWord: "", // 搜索是把 searchWord的变化映射到UI到变化，所以searchWord是state
      people: [
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
    };
    this.onChangeSearchWord = debounce(this.onChangeSearchWord, 500);
  }

  render() {
    const { viewSetting, isDesc, people, searchWord } = this.state;
    return (
      <div className="index">
        <h3>双击列表可以删除</h3>
        <NavHeader
          setView={this.handleSetView}
          viewSetting={viewSetting}
          handleSetListOrder={this.handleSetListOrder}
          isDesc={isDesc}
          onChangeSearchWord={this.onChangeSearchWord}
        ></NavHeader>
        <NavList
          viewSetting={viewSetting}
          people={filter(people, searchWord)} // 不需要修改people，改成仅显示搜索结果即可
          onDelete={this.handleDeleteList}
        ></NavList>
      </div>
    );
  }

  handleSetView = (viewSetting) => {
    this.setState({
      viewSetting,
    });
  };

  handleSetListOrder = (isDesc) => {
    this.setState({
      isDesc,
      people: sort(this.state.people, isDesc),
    });
  };

  onChangeSearchWord = (searchWord) => {
    this.setState({
      searchWord,
    });
  };

  handleDeleteList = (id) => {
    this.setState({
      people: this.state.people.filter((p) => p.id !== id),
    });
  };
}

export default Parent;
