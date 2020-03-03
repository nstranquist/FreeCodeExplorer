import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { StyledSquare } from './Docs'

export const FAQItem = ({
  item
}) => (
  <LinkContainer to="/tags">
    <StyledSquare>
      <h3 className="item-title">title</h3>
      <p className="item-desc">desc</p>
      {/* <a href="#" className="item-link">more</a> */}
    </StyledSquare>
  </LinkContainer>
)