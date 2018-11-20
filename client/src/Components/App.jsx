import React from 'react'

class App extends React.Component {
  state = {
    answer: 42
  }

  render () {
    return (
      <div>Hello React Components -- {this.state.answer}</div>
    )
  }
}

export default App
