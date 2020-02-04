import React from 'react'

import { coursesData } from '../Data/CoursesData'
import { CourseItem } from './CourseItem'

export const AllCourses = ({

}) => {



  return (
    <div>
      <h2>All Courses</h2>
      <ul style={{listStyle: 'none'}}>
        {coursesData.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </ul>
    </div>
  )
}
