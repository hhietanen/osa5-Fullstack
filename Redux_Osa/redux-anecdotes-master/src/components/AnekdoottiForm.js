import React from 'react'
import PropTypes from 'prop-types'

class AnekdoottiForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.context.store.dispatch({ 
      type: 'NEWANECDOTE', 
      content 
    })
  
    e.target.anecdote.value = ''
  }
   render() {
     return (
       <div>
      <h2>Tee uusi</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>Luo</button> 
        </form>
      </div>
     )
   }
}

AnekdoottiForm.contextTypes = {
  store: PropTypes.object
}

export default AnekdoottiForm