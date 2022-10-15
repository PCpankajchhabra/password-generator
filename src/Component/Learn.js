import React from "react";
import Child from "../Child";

class Learn extends React.Component {
  constructor(props) {
    super(props);
    console.warn("Constructor");
    this.state = {
      count: 1,
      show: true,
    };
  }

  componentDidMount() {
    console.warn("component did mount");
  }

  shouldComponentUpdate() {
    return true;
  }

  increament() {
    this.setState({ count: this.state.count + 1 });
  }

  hide() {
    this.setState({ show: !this.state.show });
    console.log(this.state.show);
  }
  render() {
    return (
      <>
        {this.state.show ? <Child data={this.state.count} /> : null}
        <button onClick={this.increament.bind(this)}>increase</button>
        <button onClick={this.hide.bind(this)}>hide</button>
      </>
    );
  }
}
export default Learn;
