import { createStore } from 'redux'
import rootReducer from './rootReducer'

const configureStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //persistedState,
    // compose(
    //   applyMiddleware(thunk),
    //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    //     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    //     : (f: any) => f
    // ),
  )

  return store
}

export default configureStore