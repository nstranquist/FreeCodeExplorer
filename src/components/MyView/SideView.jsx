import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'


export const StyledSideView = styled.div`
  margin: 1rem;
  padding: .5rem;
  border: 1px solid rgba(0,0,0,.1);

  .side-view-list {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      // display: block;
      // width: 100%;
      border-bottom: 1px solid rgba(0,0,0,.1);
      cursor: pointer;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background: rgba(0,0,0,.05);
        text-decoration: underline;
      }

      .side-view-link {
        display: block;
        padding: .5rem 1rem;
      }
    }
  }
`

export const SideView = ({

}) => {

  return (
    <StyledSideView>
      <ul className="side-view-list">
          <li>
            <Link className="side-view-link" to="/my/home">Home</Link>
          </li>
          <li>
            <Link className="side-view-link" to="/my/courses">Your Courses</Link>
          </li>
          <li>
            <Link className="side-view-link" to="/my/progress">Your Progress</Link>
          </li>
          <li>
            <Link className="side-view-link" to="/my/goals">Goals</Link>
          </li>
          <li>
            <Link className="side-view-link" to="/my/kanban">KanBan</Link>
          </li>
          <li>
            <Link className="side-view-link" to="/my/settings">Settings</Link>
          </li> {/* user can select which tools they want in their dashboard */}
      </ul>
    </StyledSideView>
  )
}
