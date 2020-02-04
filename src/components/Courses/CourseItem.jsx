import React from 'react'
import { Form } from 'react-bootstrap'
import { StyledCourseItem } from '../../styles/Course.style'

export const CourseItem = ({
  course, // id, name, duration
  handleSelect
}) => {

  const handleTitleClick = () => {

  }

  return (
    <StyledCourseItem>
      <div className="left-side">
        {/* checkbox here */}
        <Form.Check type="checkbox" />
      </div>
      <div className="right-side">
        <h6 onClick={handleTitleClick} style={{marginTop:5,marginBottom:5,padding:5}}>
          {course.name}</h6>
        <p style={{marginTop:5,marginBottom:5,padding:5, color:"rgba(0,0,0,.55)"}}>
          {course.duration}</p>
      </div>
    </StyledCourseItem>
  )
}
