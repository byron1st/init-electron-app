/* global document */

'use strict'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Window from './components/window'

class Container extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Window store={this.state} />
    )
  }
}

ReactDOM.render(<Container />, document.getElementById('react-container'))
