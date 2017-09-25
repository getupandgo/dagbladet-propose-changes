import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import edits from './edits/edits.reducer'
import paragraphs from './paragraphs/paragraphs.reducer'

const store = createStore(
  combineReducers({
    edits,
    paragraphs,
    routing: routerReducer
  }),
  applyMiddleware(routerMiddleware(browserHistory)),
  applyMiddleware(thunk),
  applyMiddleware(logger)
)

export default store
