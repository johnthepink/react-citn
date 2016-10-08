import React from "react";

export default class ClickyButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.getStyle = this.getStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.triggerFlash = this.triggerFlash.bind(this);
  }

  componentDidMount() {
    this.triggerFlash();
  }

  getStyle() {
    const style = { color: "white" };
    style.background = this.state.active ? "red" : "green";
    return style;
  }

  triggerFlash() {
    setInterval(() => {
      this.setState({ active: !this.state.active });
    }, 1000);
  }

  handleClick() {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <button style={this.getStyle()} onClick={this.handleClick}>
        Click Me!
      </button>
    );
  }
}
