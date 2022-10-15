import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentstate: 5,
    };
  }
  componentDidUpdate(props, state) {
    if (this.props.data === state.currentstate) {
      console.log(props, state);
    }
  }
  componentWillUnmount() {
    console.warn("component in unmounted");
  }
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log(prevProps);
    return prevProps;
  }

  render() {
    return (
      <>
        <h2>{this.props.data}</h2>
      </>
    );
  }
}
export default Child;
