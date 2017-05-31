import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducer'

const middlewares = [createLogger({ level: 'info' })]

export default createStore(reducer, applyMiddleware(...middlewares))
