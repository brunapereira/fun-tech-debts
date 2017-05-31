import React from 'react'
import { render } from 'react-dom'
import store from './store'
import App from './app'
import './main.less' 

render(
  <App />,
  document.getElementById('app')
)
