import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container, Button } from 'react-bootstrap'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { formatDuration } from '../../utils/formatDuration'
import { coursesData, popularCoursesData } from '../../data/CoursesData'
import { SubMenu } from '../../components/layout'


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
    let courseItem = popularCoursesData.courses.find(course => course.id === paramsId)
    if(courseItem) {
      setCourseItem(courseItem)
      setLoading(false)
    }
  }, [])

  const handleStart = (e) => {
    // add course with id to the active courses:
    console.log('clicked start with course id:', courseItem.id)
  }

  const handleLink = (e) => {
    console.log('link clicked')
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
          <a href={courseItem.url} target="_blank" style={{marginBottom:20}}>
            <Button onClick={handleStart}>Begin</Button>
          </a>
          <br />
          
          {/* What should be included in each course??? */}
          {/* 1. Course Content */}
          {/* 2. Course Details */}
          {/* 3. Course Forum or Goodies(?) */}
          <p style={{marginTop:20}}>{courseItem.description}</p>
          <br />
          <p>difficulty: {courseItem.difficulty}</p>
          <p>tags: {courseItem.tags.map((tag, index) => <span key={index} className="tag-item">{tag}</span>)}</p>
          <p>year: {courseItem.year}</p>
          <p><a href={courseItem.ogChannel} onClick={handleLink} target="_blank">original channel</a></p>
        </StyledCourseSection>
      </Container>
    </div>
  )
}
