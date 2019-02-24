import { Button } from '@blueprintjs/core'
import { useState } from 'react'
import React from "react"
import ReactDOM from "react-dom"

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button icon='plus'
        onClick={() => setCount(count + 1)}
      />
      <Button icon='minus'
        onClick={() => setCount(count - 1)}
      />
      <div>{count}</div>
    </div>
  )
}

ReactDOM.render(<Counter />, document.querySelector(".root"))
