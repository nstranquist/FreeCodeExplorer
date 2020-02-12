import { combineReducers } from 'redux'
import profile from './Profile'
import notes from './Notes'
import kanban from './KanBan'

const rootReducer = combineReducers({
  profile,
  notes,
  kanban,
})

export default rootReducer