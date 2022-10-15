import React from "react";
import UpdatedComponent from "./UpdatedComponent";

class RenderProps1 extends React.Component {
  render() {
    console.log(this.props.increaseCouter);
    const { count, increaseCouter } = this.props;

    return (
      <div style={{ padding: "20px" }}>
        {count}
        <br />
        <button onClick={increaseCouter}>increament {count}</button>
      </div>
    );
  }
}
export default UpdatedComponent(RenderProps1);
