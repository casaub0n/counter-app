import { Button } from '@blueprintjs/core'
import React from "react"
import ReactDOM from "react-dom"

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
        />
        <Button icon='minus'
          onClick={() => {
            this.setState({ value: this.state.value - 1 })
          }}
        />
        <div>{this.state.value}</div>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.querySelector(".root"))
