// Profile Types
const ADD_COURSE = 'ADD_COURSE'
const REMOVE_COURSE = 'REMOVE_COURSE'


// Profile Action Creators
export const addCourse = (id) => {
  return {
    type: ADD_COURSE,
    id
  }
}

export const removeCourse = (id) => {
  return {
    type: REMOVE_COURSE,
    id
  }
}


// Profile Reducer
const initialState = {
  myCourses: []
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case ADD_COURSE:
      return {
        ...state,
        myCourses: [
          ...state.myCourses,
          action.id
        ]
      }
    case REMOVE_COURSE:
      return {
        ...state,
        myCourses: state.myCourses.filter(courseId => courseId !== action.id)
      }
    default:
      return state
  }
}