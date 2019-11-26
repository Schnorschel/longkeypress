import React from 'react'
import useLongPress from './useLongPress'

// prettier-ignore
const HelloWorld = (props) => {
  const backspaceLongPress = useLongPress(e => props.handleButtonEvent(e.button), 500
  )

  return (
    <>
      return <h1>Hello, world!</h1>
      <button {...backspaceLongPress}>Click Me or Long-press Me!</button>
    </>
  )
}

export default HelloWorld
