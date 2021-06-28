import CardList from 'components/card-list/CardList'
import React, { Component } from 'react'
import './styles/root.css'

class App extends Component {
  constructor() {
    super()

    this.state = { monsters: [], searchField: '' }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }))
  }

  render() {
    const { monsters, searchField } = this.state

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()),
    )

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value })
          }}
        />
        <CardList monsters={filteredMonsters} />
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
