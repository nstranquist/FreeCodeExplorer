import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container, Button } from 'react-bootstrap'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { formatDuration } from '../../utils/formatDuration'
import { coursesData } from '../Data/CoursesData'
import { SubMenu } from './SubMenu'


const StyledCourseSection = styled.section`
  text-align: center;
`

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

  const handleStart = (e) => {
    // add course with id to the active courses:
    console.log('clicked start with course id:', courseItem.id)
  }
  
  if(loading) {
    return (
      <Container>
        <p>loading....</p>
      </Container>
    )
  }

  return (
    <div>
      <SubMenu />
      <Container>
        <StyledHeader style={{marginBottom:5}}>
          <h2>{courseItem.name}</h2>
          <StyledSubheader>
            {/* Insert Clock Icon Here */}
            {formatDuration(courseItem.duration)}
          </StyledSubheader>
        </StyledHeader>

        <StyledCourseSection className="course-detail">
          <Button onClick={handleStart}>Begin</Button>
          <br />
          
          {/* What should be included in each course??? */}
          {/* 1. Course Content */}
          {/* 2. Course Details */}
          {/* 3. Course Forum or Goodies(?) */}
        </StyledCourseSection>
      </Container>
    </div>
  )
}
