import React from 'react'

import { Form, Container } from 'react-bootstrap'
import { coursesData } from '../Data/CoursesData'
import { CourseItem } from './CourseItem'
import { StyledCourseItem } from '../../styles/Course.style'

export const AllCourses = ({

}) => {



  return (
    <Container>
      <header style={{textAlign:'center', padding: '1.5rem 1rem',}}>
        <h2>All Courses</h2>
        <p style={{fontSize:'1rem', fontWeight:300, marginTop:15}}>-- select a course to add it --</p>
      </header>
      
      <ul style={{listStyle: 'none', paddingLeft:0}}>
        {/* List Header */}
        <StyledCourseItem>
          <div className="left-side" style={{display:'flex', alignItems:'center'}}>
            <Form.Check type="checkbox" />
            <strong>Add</strong>
          </div>
          <div className="right-side">
            <strong>Course</strong>
          </div>
        </StyledCourseItem>
        {coursesData.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </ul>
    </Container>
  )
}
