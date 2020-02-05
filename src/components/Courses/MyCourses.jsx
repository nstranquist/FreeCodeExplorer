import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap'
import { CourseItem } from './CourseItem'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { StyledCourseItem } from '../../styles/Course.style'
import { getMyCourses } from '../../store/selectors'
import { addCourse, removeCourse } from '../../store/Profile'

export const MyCoursesUI = ({
  myCourses,
  myCoursesData,
  addCourse,
  removeCourse,
}) => {
  const [checked, setChecked] = useState([])

  const handleAllCheck = (e) => {
    console.log('clicked allChange checkbox with event:', e, 'checked:', e.target.checked)
    if(e.target.checked) {
      // select all boxes
      let allMyCourseIds = [...myCourses]
      setChecked(allMyCourseIds)
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

  const handleAddCourse = (idArray) => {
    addCourse(idArray)
  }

  const handleRemoveCourse = (idArray) => {
    removeCourse(idArray)
  }

  return (
    <Container>
      <StyledHeader>
        <h2>Your Courses</h2>
        <StyledSubheader>Showing {myCoursesData.length} courses</StyledSubheader>
      </StyledHeader>
      
      {myCoursesData.length > 0 && (
        <div className="courses-toolbar">
          <Button>Add Course</Button>
          <Button variant="light">Cancel</Button>
        </div>
      )}

      <ul className="plain-list">
        {/* List Header */}
        <StyledCourseItem>
          <div className="left-side" style={{display:'flex', alignItems:'center'}}>
            <Form.Check type="checkbox" checked={checked.length === myCoursesData.length} onChange={handleAllCheck} name="allCourses" />
          </div>
          <div className="right-side">
            <strong>Course</strong>
          </div>
        </StyledCourseItem>
        {myCoursesData.length > 0 ? myCoursesData.map((course, index) => (
          <CourseItem
            key={index}
            course={course}
            checked={checked.includes(course.id)}
            checkCourse={checkCourse}
            uncheckCourse={uncheckCourse}
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
  myCourses: state.profile.myCourses,
  myCoursesData: getMyCourses(state)
})

export const MyCourses = connect(
  mapStateToProps,
  { addCourse, removeCourse }
)(MyCoursesUI)