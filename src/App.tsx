import React, { Component } from 'react'

interface Props {
  name: string
}

const name:string = "jian"
console.log(name);

class App extends Component<Props> {
  render () {
    return (
      <div>
        hi {this.props.name} from tsx!
      </div>
    )
  }
}

export default App;

