import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class RenderProp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    increamentCount = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increaseCouter={this.increamentCount}
        />
      );
    }
  }
  return RenderProp;
};
export default UpdatedComponent;
