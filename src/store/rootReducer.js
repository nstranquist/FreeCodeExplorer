import { combineReducers } from 'redux'
import profile from './Profile'
// import { courses } from './Courses'

const rootReducer = combineReducers({
  profile,
  // courses
})

export default rootReducer