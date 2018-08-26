import React from 'react'
import AnekdoottiLista from './components/AnekdoottiLista'
import AnekdoottiForm from './components/AnekdoottiForm'

class App extends React.Component {



  render() {
//    const anecdotes = this.props.store.getState()

    return (
      <div>
        <h2>Anekdootteja</h2>
        <AnekdoottiLista />
        <AnekdoottiForm />
      </div>
    )
  }
}

export default App