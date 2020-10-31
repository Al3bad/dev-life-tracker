import React from "react";
import "./Title.scss";

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h4 className="title__title">{this.props.title}</h4>
        <hr className="title__line" />
      </div>
    );
  }
}

export default Title;
