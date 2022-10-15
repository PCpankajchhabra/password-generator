import React from "react";
import UpdatedComponent from "./UpdatedComponent";

class RenderProps2 extends React.Component {
  render() {
    const { count, increaseCouter } = this.props;

    return (
      <div style={{ marginTop: "12px", padding: "20px" }}>
        {count}
        <br />
        <button onMouseEnter={increaseCouter}>Hover</button>
      </div>
    );
  }
}
export default UpdatedComponent(RenderProps2);
