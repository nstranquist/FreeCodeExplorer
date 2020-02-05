import React, { useEffect } from 'react'

import { coursesData } from '../Data/CoursesData'
import { Container } from 'react-bootstrap'

// use match params

export const CourseDetail = (props) => {

  useEffect(() => {
    // get match params and match to course info from coursesData
  }, [])
  
  return (
    <Container>
      Course Detail
    </Container>
  )
}
