import React from 'react'
import { connect } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap'
import { CourseItem } from './CourseItem'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { StyledCourseItem } from '../../styles/Course.style'
import { getMyCourses } from '../../store/selectors'
import { removeCourse } from '../../store/Profile'

export const MyCoursesUI = ({
  myCoursesData,
  removeCourse,
}) => {

  const onRemoveCourse = (id) => {
    removeCourse(id)
  }

  return (
    <Container>
      <StyledHeader>
        <h2>Your Courses</h2>
        <StyledSubheader>Showing {myCoursesData.length} courses</StyledSubheader>
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
        {myCoursesData.length > 0 ? myCoursesData.map((course, index) => (
          <CourseItem
            key={index}
            course={course}
            added={true}
            onRemoveCourse={onRemoveCourse}
          />
        )) : (
          <div style={{textAlign:'center', marginTop:15}}>
            <p>You don't have any courses yet!</p>
            <Button>Add Some</Button>
          </div>
        )}
      </ul>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  myCoursesData: getMyCourses(state)
})

export const MyCourses = connect(
  mapStateToProps,
  { removeCourse }
)(MyCoursesUI)