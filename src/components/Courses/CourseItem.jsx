import React from 'react'
import { formatDuration } from '../../utils/formatDuration'
import { StyledCourseItem } from '../../styles/Course.style'
import { LinkContainer } from 'react-router-bootstrap'
import { MdAdd, MdCheck } from 'react-icons/md'
import { Button } from 'react-bootstrap'

export const CourseItem = ({
  course, // id, name, duration
  added,
  onAddCourse,
  onRemoveCourse,
  onStartCourse,
}) => {

  const handleAddCourse = (e) => {
    onAddCourse(course.id)
  }

  const handleRemoveCourse = (e) => {
    onRemoveCourse(course.id)
  }

  const handleStartCourse = (e) => {
    onStartCourse(course.id)
  }

  return (
    <StyledCourseItem>
      <div className="left-side">
        {added ? (
          <div className="icon-container" style={{padding:8, cursor:'pointer'}}
            onClick={handleRemoveCourse}>
              <MdCheck style={{fontSize:24,color:"rgba(0,0,0,.6)"}}/>
          </div>
        ) : (
          <div className="icon-container" style={{padding:8, cursor:'pointer'}}
            onClick={handleAddCourse}>
            <MdAdd style={{fontSize:24,color:"rgba(0,0,0,.6)"}} />
          </div>
        )}
      </div>
      <div className="center-body">
        <LinkContainer to={`/course/${course.id}`}>
            <h6 className="course-title">{course.name}</h6>
          </LinkContainer>
          <p style={{marginTop:5,marginBottom:5,padding:5, color:"rgba(0,0,0,.55)"}}>
            {formatDuration(course.duration)}</p>
      </div>
      <div className="right-side">
        <Button variant="light" style={{display:'inline-block'}}
          onClick={handleStartCourse}>Start</Button>
      </div>
    </StyledCourseItem>
  )
}
