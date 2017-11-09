import { applyMiddleware, createStore, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { reactReduxFirebase } from 'react-redux-firebase'
import reducer from './reducer'

const middlewares = [createLogger({ level: 'info' })]

const firebaseConfig = {
	apiKey: "AIzaSyAj29WLtuqyPoX0T2RTufIPSFBBtGUsPMM",
	authDomain: "fun-tech-debts.firebaseapp.com",
	databaseURL: "https://fun-tech-debts.firebaseio.com",
	projectId: "fun-tech-debts",
	storageBucket: "fun-tech-debts.appspot.com",
	messagingSenderId: "115519258808"
}

const createStoreWithMiddleware = compose(
	reactReduxFirebase(firebaseConfig, { userProfile: 'users', enableLogging: false }, f => f)
)(createStore)

export default createStoreWithMiddleware(reducer)

// export default createStore(reducer, applyMiddleware(...middlewares))
