import React from 'react'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'


const StyledSubNav = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  // box-shadow: 0px 0px 30px 0px rgba(0,0,0,.1);
  // background: rgba(0,0,0,.015);
  color: #fff;
  background: #6200EE;
  font-family: sans-serif;
  font-size: 1.2rem;

  .sub-nav-item {
    padding: 1rem 1.4rem;
    margin: 0 .5rem;
    cursor: pointer;
    transition: .1s ease-in-out;

    &:hover {
      background: rgba(0,0,0,.1);
      transition: .1s ease-in-out;
    }
  }
`

export const SubMenu = ({

}) => {

  // add icons to nav items
  return (
    <StyledSubNav>
      <LinkContainer to="/kanban">
        <li className="sub-nav-item">
          Kanban</li>
      </LinkContainer>
      <LinkContainer to="/my/notes">
        <li className="sub-nav-item">
          Add Note</li>
      </LinkContainer>
      <li className="sub-nav-item">
        Forum</li>
      <li className="sub-nav-item">
        Goals</li>
      <li className="sub-nav-item">
        Calendar</li>
    </StyledSubNav>
  )
}
