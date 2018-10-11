import React, { Component, Fragment } from 'react'

export default class componentName extends Component {
  state = {
    name: 'Bryan'
  }
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    )
  }
}
