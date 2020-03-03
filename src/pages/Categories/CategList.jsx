import React from 'react'
import { Container } from 'react-bootstrap'
import { categoriesData } from '../../data/CategoriesData'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { LinkContainer } from 'react-router-bootstrap'

export const Categories = () => {
  return (
    <Container>
      <StyledHeader>
        <h4>Categories</h4>
        <StyledSubheader>browse categories of programming</StyledSubheader>
      </StyledHeader>

      {/* List of Categories */}
      <ul style={{listStyle:'none'}}>
        {categoriesData.map(category => (
          <li key={category.id} style={{marginTop:15, paddingBottom:15, borderBottom:'1px solid rgba(0,0,0,.33)'}}>
            <p><strong>name:</strong> {category.name}</p>
            <p><strong>details:</strong> {category.description}</p>
            <LinkContainer to={`/category/${category.id}`}>
              <a>See More</a>
            </LinkContainer>
          </li>
        ))}
      </ul>
    </Container>
  )
}
