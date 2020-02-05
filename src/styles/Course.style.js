import styled from 'styled-components'
import { Card } from 'react-bootstrap'

export const StyledCourseItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,.08);

  .left-side {
    display: inline-block;
    margin-right: 15px;
  }
  .center-body {
    flex: 1;

    p {
      margin: 0 !important;
    }
  }
  .right-side {
    display: inline-block;
    margin-left: 15px;
  }

  .course-title {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.1rem;

    :hover {
      text-decoration: underline;
    }
  }
`

export const StyledFeaturedCard = styled(Card)`
  background: #6200EE;
  color: #fff;
  text-align: center;

  .featured-card-body {
    display: flex;
    align-items: center;

    .left-side {
      display: inline-block;
      margin-right: 20px;
    }
    .center-body {
      flex: 1;
      margin-left: calc(-20px - 2.4rem);


      p {
        margin: 0 !important;
      }
    }

    @media (max-width: 500px) {
      .left-side {
        display: none;
      }
      .center-body {
        margin-left: initial;
      }
    }
  }
`
export const StyledFeatureTitle = styled.h2`
  display: inline-block;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`