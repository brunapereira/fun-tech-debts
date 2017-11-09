import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { reactReduxFirebase } from 'react-redux-firebase'
import reducer from './reducer'
import firebaseConfig from './firebase'

const middlewares = [createLogger({ level: 'info' })]

const createStoreWithMiddleware = compose(
	reactReduxFirebase(firebaseConfig, { userProfile: 'users', enableLogging: false }, f => f)
)(createStore)

export default createStoreWithMiddleware(reducer, applyMiddleware(...middlewares))
