import React from 'react'
import {
  Router,
  Route,
  IndexRedirect
} from 'react-router'

import {
  App,
  EditList,
  ParagraphList
} from './components/index'

const routes = ({history}) => (
  <Router history={history}>
    <Route name='App' path='/' component={App}>
      <IndexRedirect to='fb' />
      <Route path='fb' component={ParagraphList} />
      <Route path='fb/results' component={EditList} />
    </Route>
  </Router>
)

export default routes
