import React, { Component } from 'react';

class NavHeader extends Component {

  render(){
    const { activeIndex, inputValue, btnActive } = this.props;
    return (
      <div className="header">
        <button 
          className={activeIndex === 1 ? "btn btn-active" : "btn"}
          onClick={() => this.handleClickStyle(1)}
        >列表视图</button>
        <button
          className={activeIndex === 2 ? "btn btn-active" : "btn"}
          onClick={() => this.handleClickStyle(2)}
        >网格视图</button>
        <input
          className="input"
          type="text"
          placeholder="请输入搜索内容"
          value={inputValue}
          onChange={this.onChangeInputValue}
        />
        <button 
          className={btnActive === 1 ? "btn btn-active" : "btn"}
          onClick={() => this.handleClickBtnStyle(1, false)}
        >列表升序</button>
        <button
          className={btnActive === 2 ? "btn btn-active" : "btn"}
          onClick={() => this.handleClickBtnStyle(2, true)}
        >列表降序</button>
      </div>
    )
  }

  handleClickStyle = index => {
    this.props.handleClickStyle(index);
  }

  handleClickBtnStyle = (index, boolean) => {
    this.props.handleClickBtnStyle(index, boolean);
  }

  onChangeInputValue = value => {
    this.props.onChangeInputValue(value.target.value);
  }

}

export default NavHeader;