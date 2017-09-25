import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import Router from './router'
import store from './store'

import 'grommet/grommet.min.css'

const root = document.getElementById('main')
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>, root
)
