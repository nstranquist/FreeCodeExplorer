import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { ContributeForm } from './ContributeForm'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'

const FormContainer = styled.div`
  max-width: 75%;
  margin: 0 auto;

  @media (max-width: 800px) {
    max-width: 100%;
    margin-left: 8px;
    margin-right: 8px;
  }
`

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
      <FormContainer className="form-container">
        <ContributeForm onHandleSubmit={onHandleSubmit} />
      </FormContainer>
    </Container>
  )
}
