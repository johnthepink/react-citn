import React from "react";

export default class ClickyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    if (this.state.active) {
      return <button style={{ background: "red" }}>{this.props.text}</button>;
    }
    return <button style={{ background: "green" }}>{this.props.text}</button>;
  }
}

ClickyButton.defaultProps = {
  text: "Click Me!",
};

ClickyButton.propTypes = {
  text: React.PropTypes.string,
};
