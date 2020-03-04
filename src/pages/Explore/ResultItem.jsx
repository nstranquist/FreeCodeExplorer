import React from 'react'
import styled from 'styled-components'
import { LinkContainer } from 'react-router-bootstrap'


const StyledResultItem = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 8px;
  cursor: pointer;
  color: initial;
  text-align: center;
  box-shadow: 5px 10px 40px rgba(0,0,0,.06);

  &:hover {
    background: rgba(0,0,0,.03);
  }

  .item-title {
    font-size: 1.6rem;
  }
  .item-desc {
    display: flex;
    justify-content: center;
    // align-items: center;
    margin-bottom: 0;
    min-height: 2.8rem;
    font-size: 1rem;
    line-height: 1.5;
    max-height: 3rem; // 2 line-heights
    overflow-y: hidden;
    text-overflow: ellipsis;
  }
`

export const ResultItem = ({
  course, // item
}) => {
  return (
    <LinkContainer to={"/course/" + course.id}>
      <StyledResultItem>
        <h3 className="item-title">{course.name}</h3>
        <p className="item-desc">{course.description}</p>
      </StyledResultItem>
    </LinkContainer>
  )
}
