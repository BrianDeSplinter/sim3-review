import reducer from './reducer'
import {creatStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

export default creatStore(reducer, applyMiddleware(promiseMiddleware))