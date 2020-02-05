import React from 'react'
import { formatDuration } from '../../utils/formatDuration'
import { StyledCourseItem } from '../../styles/Course.style'
import { LinkContainer } from 'react-router-bootstrap'
import { MdAdd, MdCheck } from 'react-icons/md'

export const CourseItem = ({
  course, // id, name, duration
  added,
  onAddCourse,
  onRemoveCourse,
}) => {

  const handleAddCourse = (e) => {
    // add course
    onAddCourse(course.id)
  }

  const handleRemoveCourse = (e) => {
    // remove course
    onRemoveCourse(course.id)
  }

  return (
    <StyledCourseItem>
      <div className="left-side">
        {added ? (
          <MdCheck style={{fontSize:24,color:"rgba(0,0,0,.6)", cursor:"pointer"}}
            onClick={handleRemoveCourse} />
        ) : (
          <MdAdd style={{fontSize:24,color:"rgba(0,0,0,.6)", cursor:"pointer"}}
            onClick={handleAddCourse} />
        )}
        {/* <MdCheck style={{fontSize:21, fontWeight:300, color:"rgba(0,0,0,.7)"}} /> */}
        {/* <Form.Check type="checkbox" checked={checked} onChange={handleCheck} /> */}
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
