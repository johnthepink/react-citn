import React from "react";

export default class Terminal extends React.Component {
  render() {
    return (
      <div>
        <div id="bar">
          <div id="red" />
          <div id="yellow" />
          <div id="green" />
        </div>
        <div id="screen">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Terminal.propTypes = {
  // eslint-disable-next-line
  children: React.PropTypes.object.isRequired,
};
