import { coursesData } from '../components/Data/CoursesData'

export const getMyCourses = (state) => {
  console.log('myCourses:', state.profile.myCourses)
  let selectedCourses = coursesData.filter(course => {
    if(state.profile.myCourses.includes(course.id))
      return course
  })

  console.log('my selected courses:', selectedCourses)
  return selectedCourses
}