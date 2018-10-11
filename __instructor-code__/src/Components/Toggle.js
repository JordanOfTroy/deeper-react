import React, {Component} from 'react'

class Toggle extends Component {
  state = {
    visible: true
  }
  handleVisiblity = () => {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }
  render(){
    return (
      <>
        <button onClick={this.handleVisiblity}>Show/Hide</button>
        {this.state.visible && this.props.render()}
      </>
    )
  }
}

export default Toggle