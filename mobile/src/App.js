import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'
import Colors from './containers/Colors'

const App = () => {
  const store = createStore(reducers, {})
  return (
    <Provider store={store}>
      <Colors />
    </Provider>
  )
}

export default App