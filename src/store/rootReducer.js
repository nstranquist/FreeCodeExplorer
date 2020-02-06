import { combineReducers } from 'redux'
import profile from './Profile'
import notes from './Notes'

const rootReducer = combineReducers({
  profile,
  notes
})

export default rootReducer