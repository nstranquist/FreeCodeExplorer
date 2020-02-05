import React, { useState } from 'react'

import { Form, Container } from 'react-bootstrap'
import { coursesData } from '../Data/CoursesData'
import { CourseItem } from './CourseItem'
import { StyledCourseItem } from '../../styles/Course.style'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'

export const AllCourses = ({

}) => {
  const [checked, setChecked] = useState([])

  const handleAllCheck = (e) => {
    console.log('clicked allChange checkbox with event:', e, 'checked:', e.target.checked)
    if(e.target.checked) {
      // select all boxes
      let allCourseIds = coursesData.map(course => {
        return course.id
      })
      setChecked(allCourseIds)
    }
    else {
      // uncheck box, deselect all boxes
      setChecked([])
    }
  }

  const checkCourse = (id) => {
    let copy = [...checked]
    copy.push(id)
    setChecked(copy)
    console.log('checked:', checked)
  }

  const uncheckCourse = (id) => {
    let filteredCopy = checked.filter(courseId => courseId !== id)
    setChecked(filteredCopy)
    console.log('checked:', checked)
  }

  return (
    <Container>
      <StyledHeader>
        <h2>All Courses</h2>
        <StyledSubheader>-- select a course to add it --</StyledSubheader>
      </StyledHeader>
      
      <ul className="plain-list">
        {/* List Header */}
        <StyledCourseItem>
          <div className="left-side" style={{display:'flex', alignItems:'center'}}>
            <Form.Check type="checkbox" checked={checked.length === coursesData.length} onChange={handleAllCheck} name="allCourses" />
          </div>
          <div className="right-side">
            <strong>Course</strong>
          </div>
        </StyledCourseItem>
        {coursesData.map((course, index) => (
          <CourseItem
            key={index}
            course={course}
            checked={checked.includes(course.id)}
            checkCourse={checkCourse}
            uncheckCourse={uncheckCourse}
          />
        ))}
      </ul>
    </Container>
  )
}
