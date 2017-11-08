import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import store from './store'
import App from './components/app'
import Home from './components/home'
import './main.less' 

const history = createHistory()

render(
  <Provider store={store}>
    <Router history={history}>
      <div className='wrapper'>
        <Route exact path='/' component={Home} />
        <Route exact path='/board' component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
)
