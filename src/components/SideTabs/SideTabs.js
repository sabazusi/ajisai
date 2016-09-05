import React from 'react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0
    };
  }

  getTabsDom() {
    const items = this.props.items;
    return items.map((item, i) =>{
      return (
        <div className="tab" onClick={()=>{this.setState({currentIndex: i})}}>{item.tab}</div>
      );
    });
  }

  getContentsDom() {
    const items = this.props.items;
    return items.filter((item) => {
      return items.indexOf(item) === this.state.currentIndex;
    })
    .map((item) => <div className="content">{item.content}</div>);
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
