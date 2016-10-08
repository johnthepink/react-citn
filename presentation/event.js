import React from "react";

export default class ClickyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <button
        style={{ background: "green" }}
        onClick={this.handleClick}
      >
        {this.props.text}
      </button>
    );
  }
}

ClickyButton.defaultProps = {
  text: "Click Me!",
};

ClickyButton.propTypes = {
  text: React.PropTypes.string,
};
