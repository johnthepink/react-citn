/* eslint-disable react/no-multi-comp */
import React from "react";

class ClickyButton extends React.Component {
  render() {
    return <button>{this.props.text}</button>;
  }
}

ClickyButton.propTypes = {
  text: React.PropTypes.string,
};

ClickyButton.defaultProps = {
  text: "Click Me!",
};

export default class CrazyForm extends React.Component {
  render() {
    return (
      <div>
        <h3>Crazy Form!</h3>
        <ClickyButton text="Go Crazy!" />
      </div>
    );
  }
}
