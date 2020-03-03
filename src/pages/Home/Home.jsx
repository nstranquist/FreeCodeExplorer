import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { MyCourses, AllCourses } from '../Courses'
import { StyledJumboHeader, StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { addCourse, removeCourse } from '../../store/Profile/Courses'
import { coursesData, popularCoursesData } from '../../data/CoursesData'
import { FeaturedCard } from './FeaturedCard'
import { LinkContainer } from 'react-router-bootstrap'

const featuredCourse = popularCoursesData.courses[Math.floor(Math.random() * popularCoursesData.courses.length)]

export const HomeUI = ({
  myCourses,
  addCourse,
  removeCourse,
}) => {

  const handleFeatureAdd = (e) => {
    addCourse(featuredCourse.id)
  }
  const handleFeatureRemove = (e) => {
    removeCourse(featuredCourse.id)
  }

  const isCourseInProfile = (id) => {
    if(popularCoursesData.courses.find(course => course.id === id)) {
      if(myCourses.includes(id))
        return true;
    }
    return false
  }

  return (
    <Container>
      {/* <LinkContainer to="/my/home">
        <a>to MyView</a>
      </LinkContainer> */}
      <StyledJumboHeader>
        <h1>Welcome, Coder...</h1>
        <StyledSubheader>~ your journey awaits ~</StyledSubheader>
      </StyledJumboHeader>

      {/* Featured Card */}
      <FeaturedCard
        featuredCourse={featuredCourse}
        handleFeatureAdd={handleFeatureAdd}
        handleFeatureRemove={handleFeatureRemove}
        isCourseInProfile={isCourseInProfile}
      />

      <div style={{height:'10px',marginTop:20}}></div>
      {/* My Courses (eventually show progress on them) */}
      <MyCourses />
      {/* Can offer tabs to view either one, or tidbits of each */}
      {/* <div style={{borderBottom:'1px solid rgba(0,0,0,.25)',height:'10px', marginTop:40,marginBottom:40}}></div>
      <AllCourses /> */}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  myCourses: state.profile.courses.myCourses,
})

export const Home = connect(
  mapStateToProps,
  { addCourse, removeCourse }
)(HomeUI)