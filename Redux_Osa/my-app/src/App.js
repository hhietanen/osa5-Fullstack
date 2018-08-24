import React from 'react'
import ReactDOM from 'react-dom'
import counterReducer from './reducer'
import {createStore} from 'redux'

const store = createStore(counterReducer)
let state= store.getState()
let palautteita = 0
let positiivisia 

const klikki = (nappi) => () => {
    store.dispatch({type: nappi})
    state= store.getState()
    palautteita = nappi === 'ZERO' ? 0 : 1
    positiivisia = state.good/((state.good + state.bad + state.ok)/100)
  }



const Statistiikka = () => {
  if (palautteita === 0) {
    return (
      <div>
        <h2>statistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä {state.good}</td>
            <td></td>
          </tr>
          <tr>
            <td>neutraali {state.ok}</td>
            <td></td>
          </tr>
          <tr>
            <td>huono {state.bad}</td>
            <td></td>
          </tr>
          <tr>
            <td>positiivisia {positiivisia}%</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <button onClick={klikki('ZERO')}>Nollaa</button>
    </div>
  )
}


class App extends React.Component {
  
  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={klikki('GOOD')}>hyvä</button>
        <button onClick={klikki('OK')}>neutraali</button>
        <button onClick={klikki('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)


export default App;