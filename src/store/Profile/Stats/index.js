

// Stats Types
const ADD_STATS = 'ADD_STATS'
const EDIT_STATS = 'EDIT_STATS'
const REMOVE_STATS = 'REMOVE-STATS'



// Stats Actions
export const addStats = (stats) => {
  return {
    type: ADD_STATS,
    stats
  }
}

export const editStats = (stats) => {
  return {
    type: EDIT_STATS,
    stats
  }
}

export const removeStats = (id) => {
  return {
    type: REMOVE_STATS,
    id
  }
}



// Stats Reducer
const initialState = {
  // stats: []
  hoursWorked: 0,
  coursesCompleted: 0,
  kanbanTasks: 0,
  daysActive: [],
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case ADD_STATS:
      return {
        ...state,
        //stats: [...state.stats, action.stats],
      }
    case EDIT_STATS:
      // const newStats = state.stats.map(stats => {
        // if(stats.id === action.stats.id)
          // return { ...stats, ...action.stats }
      // })
      return {
        ...state,
        // stats: newStats 
      }
    case REMOVE_STATS:
      return {
        ...state,
        stats: state.stats.filter(stats => stats.id !== action.id)
      }
    default:
      return state
  }
}
