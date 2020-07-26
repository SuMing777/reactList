import React, { Component } from "react";

class NavHeader extends Component {
  render() {
    const { viewSetting, inputValue, isDesc } = this.props;
    return (
      <div className="header">
        <button
          className={viewSetting === "list" ? "btn btn-active" : "btn"}
          onClick={() => this.props.setView("list")}
        >
          列表视图
        </button>
        <button
          className={viewSetting === "grid" ? "btn btn-active" : "btn"}
          onClick={() => this.props.setView("grid")}
        >
          网格视图
        </button>
        <input
          className="input"
          type="text"
          placeholder="请输入搜索内容"
          value={inputValue}
          onChange={(e) => this.props.onChangeSearchWord(e.target.value)}
        />
        <button
          className={isDesc === false ? "btn btn-active" : "btn"}
          onClick={() => this.props.handleSetListOrder(false)}
        >
          列表升序
        </button>
        <button
          className={isDesc === true ? "btn btn-active" : "btn"}
          onClick={() => this.props.handleSetListOrder(true)}
        >
          列表降序
        </button>
      </div>
    );
  }
}

export default NavHeader;
