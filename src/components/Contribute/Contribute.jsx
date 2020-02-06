import React from 'react'
import { Container } from 'react-bootstrap'
import { ContributeForm } from './ContributeForm'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'

export const Contribute = () => {

  const onHandleSubmit = (results) => {
    // send contribution somewhere with api

    console.log('results:', results)
  }

  return (
    <Container>
      <StyledHeader>
        <h4>Contribute Page</h4>
        <StyledSubheader>Is something missing from our site? Please let us know!</StyledSubheader>
      </StyledHeader>
      
      <ContributeForm onHandleSubmit={onHandleSubmit} />
    </Container>
  )
}
