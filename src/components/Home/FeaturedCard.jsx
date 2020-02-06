import React from 'react'
import { Card } from 'react-bootstrap'
import { StyledFeaturedCard, StyledFeatureTitle } from '../../styles/Course.style'
import { FiClock } from "react-icons/fi";
import { MdAdd, MdCheck } from "react-icons/md";
import { formatDuration } from '../../utils/formatDuration'
import { LinkContainer } from 'react-router-bootstrap';


export const FeaturedCard = ({
  featuredCourse,
  handleFeatureAdd,
  handleFeatureRemove,
  isCourseInProfile,
}) => {
  return (
    <StyledFeaturedCard>
      <Card.Body className="featured-card-body">
        <div className="left-side" style={{zIndex:100}}>
          {isCourseInProfile(featuredCourse.id) ? (
            <MdCheck style={{fontSize:'2.4rem', cursor:'pointer'}}
              onClick={handleFeatureRemove} />
          ) : (
            <MdAdd style={{fontSize:'2.4rem', cursor:'pointer'}}
              onClick={handleFeatureAdd} />
          )}
        </div>
        <div className="center-body">
          <h6 style={{margin:0,marginLeft:-20,marginBottom:5,padding:0}}>FOR YOU</h6>
          <LinkContainer to={`/course/${featuredCourse.id}`} style={{marginLeft:-20}}>
            <StyledFeatureTitle>{featuredCourse.name}</StyledFeatureTitle>
          </LinkContainer>
          <h5 style={{margin:0,padding:0, display:'flex',alignItems:'center', justifyContent:'center',marginLeft:-20}}>
            <FiClock style={{marginRight:6}} />
            {formatDuration(featuredCourse.duration)}
          </h5>
        </div>
      </Card.Body>
    </StyledFeaturedCard>
  )
}
