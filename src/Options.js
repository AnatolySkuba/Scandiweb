import React, { Component } from 'react'

export default class Options extends Component {
  

  render() {
    return (
      <>
      <button style={{backgroundColor:`${this.props.style}`}}>{this.props.value}</button>
      </>
    )
  }
}
