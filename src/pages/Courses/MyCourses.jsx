import React from 'react'
import { connect } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap'
import { CourseItem } from './CourseItem'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { StyledCourseItem } from '../../styles/Course.style'
import { getMyCourses } from '../../store/selectors'
import { removeCourse } from '../../store/Profile/Courses'
import { LinkContainer } from 'react-router-bootstrap'

export const MyCoursesUI = ({
  myCoursesData,
  removeCourse,
}) => {

  const onRemoveCourse = (id) => {
    removeCourse(id)
  }

  const onStartCourse = (id) => {
    // start course:
    // ... takes you to a timer page? or creates new trello-type page?
    // perhaps I have outlines already made of their content...?
    // hmmm, maybe this is where the true profile creation starts!!
    console.log('clicked start course with id:', id)
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
            onStartCourse={onStartCourse}
          />
        )) : (
          <div style={{textAlign:'center', marginTop:15}}>
            <p>You don't have any courses yet!</p>
            <LinkContainer to="/courses">
              <Button>Add Some</Button>
            </LinkContainer>
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