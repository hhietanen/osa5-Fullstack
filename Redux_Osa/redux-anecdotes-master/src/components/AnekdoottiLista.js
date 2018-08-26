import React from 'react'
import PropTypes from 'prop-types'

class AnekdoottiLista extends React.Component {
  render() {
    const anecdotes = this.context.store.getState()
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => 
                this.context.store.dispatch({ type: 'ADD_VOTE', id: anecdote.id })
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

AnekdoottiLista.contextTypes = {
  store: PropTypes.object
}

export default AnekdoottiLista