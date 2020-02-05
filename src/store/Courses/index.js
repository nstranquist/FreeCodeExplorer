// // Courses Types
// const ADD_COURSE = 'ADD_COURSE'
// const REMOVE_COURSE = 'REMOVE_COURSE'


// // Courses Actions
// export const addCourse = (id) => {
//   return {
//     ADD_COURSE,
//     id
//   }
// }

// export const removeCourse = (id) => {
//   return {
//     REMOVE_COURSE,
//     id
//   }
// }


// // Courses Reducer
// const initialState = {
//   myCourses: []
// }

// export default (
//   state=initialState,
//   action
// ) => {
//   switch(action.type) {
//     case ADD_COURSE:
//       return {
//         ...state,
//         myCourses: [
//           ...state.myCourses,
//           action.id
//         ]
//       }
//     case REMOVE_COURSE:
//       return {
//         ...state,
//         myCourses: [
//           ...state.myCourses,
//           action.id
//         ]
//       }
//     default:
//       return state
//   }
// }