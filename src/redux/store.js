import rootReducer from './reducers/rootReducer'
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware
))

export default store