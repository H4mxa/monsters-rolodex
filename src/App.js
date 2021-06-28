import CardList from 'components/card-list/CardList'
import React, { Component } from 'react'
import './styles/root.css'

class App extends Component {
  constructor() {
    super()

    this.state = { monsters: [] }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }))
  }

  render() {
    const { monsters } = this.state
    return (
      <div>
        <CardList monsters={monsters} />
      </div>
    )
  }
}

export default App

// constructor() {
//   super()

//   this.state = {
//     monsters: [],
//   }
// }

// componentDidMount() {
//   fetch('http://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((user) => this.setState({ monsters: user }))
// }

// render() {
//   const { monsters } = this.state
//   return (
//     <div>
//       <CardList monsters={monsters} />
//     </div>
//   )
// }
