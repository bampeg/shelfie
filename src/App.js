import React, { Component } from 'react'
import routes from './routes'
import './main.css'

export default class App extends Component {
  render() {
    return (
      <div>
        {routes}
      </div>
    )
  }
}
