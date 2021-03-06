import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from '../reducers/rootReducer'

//* Redux devtool
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
