import React from 'react'

class Moreable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }


  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

      const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }


    return (
      <div>
        <div style={hideWhenVisible} onClick={this.toggleVisibility} className="content">
        {this.props.title} {this.props.author}
        </div>
        <div style={showWhenVisible} className="moreContent">
          <div style={blogStyle}>
            <div onClick={this.toggleVisibility}>
            {this.props.title} {this.props.author}
            </div>
            <div className="childContent">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Moreable