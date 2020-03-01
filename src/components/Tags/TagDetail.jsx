import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { StyledHeader } from '../../styles/Layout.style'
import { tagData } from '../../data/tagData'

export const TagDetail = ({
  match
}) => {
  const [tag, setTag] = useState(null)

  useEffect(() => {
    let tagId = match.params.tagId
    // find tag (or make api call)
    let newTag = tagData.find(tag => tag.id === tagId)
    if(newTag)
      console.log('newTag:', newTag)
    else console.log('tagId not found:', tagId)
  }, [match])

  return (
    <Container>
      <StyledHeader>
        <h1 className="primary-text">
          TagDetail
        </h1>
      </StyledHeader>
      TagDetail
    </Container>
  )
}
