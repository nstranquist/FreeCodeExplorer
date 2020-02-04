import React from 'react'
import { Form } from 'react-bootstrap'

export const CourseItem = ({
  course, // id, name, duration
  handleSelect
}) => {

  const handleTitleClick = () => {

  }

  return (
    <li style={{ padding: 20 }}>
      <div className="left-side">
        {/* checkbox here */}
        <Form.Check type="checkbox" label="Add" />
      </div>
      <div className="right-side">
        <h6 onClick={handleTitleClick}>{course.name}</h6>
        <p>{course.duration}</p>
      </div>
    </li>
  )
}
