import { combineReducers } from 'redux'

// Import Profile Reducers
import coursesReducer from './Courses'
import statsReducer from './Stats'

export default combineReducers({
  courses: coursesReducer,
  stats: statsReducer,
})