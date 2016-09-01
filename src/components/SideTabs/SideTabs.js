import React from 'react';

export default class extends React.Component {
  getTabsDom() {
    const items = this.props.items;
    return items.map((item) =>{
      return (
        <div className="tab">{item.tab}</div>
      );
    });
  }

  getContentsDom() {
    const items = this.props.items;
    return items.map((item) =>{
      return (
        <div className="content">{item.content}</div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <img src="http://dummyimage.com/64/000/fff" />
        <div className="tabs">
          {this.getTabsDom()}
        </div>
        <div className="contents">
          {this.getContentsDom()}
        </div>
      </div>
    );
  }
}
