import React from 'react'
import { connect } from 'react-redux'
import { Form, Container } from 'react-bootstrap'
import { coursesData } from '../Data/CoursesData'
import { CourseItem } from './CourseItem'
import { StyledCourseItem } from '../../styles/Course.style'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { addCourse, removeCourse } from '../../store/Profile'

export const AllCoursesUI = ({
  myCourses,
  addCourse,
  removeCourse,
}) => {

  const onAddCourse = (id) => {
    addCourse(id)
  }

  const onRemoveCourse = (id) => {
    removeCourse(id)
  }

  // const onStartCourse = (id) => {
  //   console.log('clicked start on course with id:', id)

  // }

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
            <Form.Check type="checkbox" style={{visibility:'hidden'}} />
          </div>
          <div className="right-side">
            <strong>Course</strong>
          </div>
        </StyledCourseItem>
        {coursesData.map((course, index) => (
          <CourseItem
            key={index}
            course={course}
            added={myCourses.includes(course.id)}
            onAddCourse={onAddCourse}
            onRemoveCourse={onRemoveCourse}
            // onStartCourse={onStartCourse}
          />
        ))}
      </ul>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  myCourses: state.profile.myCourses,
})

export const AllCourses = connect(
  mapStateToProps,
  { addCourse, removeCourse }
)(AllCoursesUI)