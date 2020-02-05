import React, { useState, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { formatDuration } from '../../utils/formatDuration'
import { coursesData } from '../Data/CoursesData'

// use match params

export const CourseDetail = ({
  match
}) => {
  const [loading, setLoading] = useState(true)
  const [courseItem, setCourseItem] = useState({})

  useEffect(() => {
    // get match params and match to course info from coursesData
    let paramsId = match.params.id
    let courseItem = coursesData.find(course => course.id === paramsId)
    setCourseItem(courseItem)
    setLoading(false)
  }, [])
  
  if(loading) {
    return (
      <Container>
        <p>loading....</p>
      </Container>
    )
  }
  return (
    <Container>
      <StyledHeader>
        <h2>{courseItem.name}</h2>
        <StyledSubheader>{formatDuration(courseItem.duration)}</StyledSubheader>
      </StyledHeader>

      <section className="course-detail">
        <p>more details coming soon...</p>
      </section>
    </Container>
  )
}
