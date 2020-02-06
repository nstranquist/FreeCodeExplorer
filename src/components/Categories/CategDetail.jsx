import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { categoriesData } from '../Data/CategoriesData'
import { isObjectEmpty } from '../../utils/isObjectEmpty'
import { LinkContainer } from 'react-router-bootstrap'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'

export const CategoryDetail = ({
  match
}) => {
  const [category, setCategory] = useState({})

  useEffect(() => {
    let categoryId = match.params.categoryId;
    setCategory(categoriesData.find(category => category.id === categoryId))
  }, [])

  if(isObjectEmpty(category)) {
    return (
      <Container>
        <h4>Page not found</h4>
        <LinkContainer to="/categories">
          <Button variant="light">Go Back</Button>
        </LinkContainer>
      </Container>
    )
  }

  return (
    <Container>
      <StyledHeader>
        <h4>{category.name}</h4>
        <StyledSubheader>{category.description}</StyledSubheader>
      </StyledHeader>

      {/* More Details on Category Here */}
      <p>More Details for category: {category.name}</p>

      {/* Get Courses feed that match category id */}

    </Container>
  )
}
