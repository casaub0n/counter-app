import React from "react";
import ReactDOM from "react-dom";
import { Button } from '@blueprintjs/core'

class Counter extends React.Component<{}, { value: number }> {
  state = {
    value: 0
  }
  render() {
    return(
      <div>
        <Button icon='plus'
          onClick={() => {
            this.setState({ value: this.state.value + 1 })
          }}
        >
          {this.state.value}
        </Button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.querySelector(".root"));
