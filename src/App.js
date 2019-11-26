import React from 'react'
import HelloWorld from './components/HelloWorld'

const App = () => {
  const clickMe = mouse => {
    console.log('mouse: ' + mouse)
  }

  return <HelloWorld handleButtonEvent={clickMe} />
}

export default App
