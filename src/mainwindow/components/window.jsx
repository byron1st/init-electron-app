'use strict'

import React, {Component, PropTypes} from 'react'

export default class Window extends Component {
  render () {
    return (
      <h1> Hello, World!!!! </h1>
    )
  }
}
Window.propTypes = {
  store: PropTypes.object.isRequired
}
