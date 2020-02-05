import React from 'react'
import { Form } from 'react-bootstrap'
import { formatDuration } from '../../utils/formatDuration'
import { StyledCourseItem } from '../../styles/Course.style'
import { LinkContainer } from 'react-router-bootstrap'

export const CourseItem = ({
  course, // id, name, duration
  checked,
  checkCourse,
  uncheckCourse,
}) => {

  const handleCheck = (e) => {
    if(e.target.checked)
      checkCourse(course.id)
    else
      uncheckCourse(course.id)
  }

  return (
    <StyledCourseItem>
      <div className="left-side">
        <Form.Check type="checkbox" checked={checked} onChange={handleCheck} />
      </div>
      <div className="right-side">
        <LinkContainer to={`/course/${course.id}`}>
          <h6 className="course-title">{course.name}</h6>
        </LinkContainer>
        <p style={{marginTop:5,marginBottom:5,padding:5, color:"rgba(0,0,0,.55)"}}>
          {formatDuration(course.duration)}</p>
      </div>
    </StyledCourseItem>
  )
}
