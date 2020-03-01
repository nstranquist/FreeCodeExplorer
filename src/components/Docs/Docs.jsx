import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { faqData } from '../../data/faqData'


export const StyledSquare = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 8px;
  cursor: pointer;
  // max-height: 100px;
  color: initial;
  text-align: center;

  &:hover {
    background: rgba(0,0,0,.04);
  }

  .item-title {
    font-size: 1.6rem;
  }
  .item-desc {
    margin-bottom: 0;
    font-size: 1rem;
    min-height: 2.8rem;
    line-height: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Docs = () => {
  return (
    <Container fluid>
      <Row style={{marginTop:10}}>
        <Col md="9">
          {/* content */}
          <h3 style={{borderBottom:"1px solid rgba(0,0,0,.12)", paddingBottom: 10,marginTop:10,paddingLeft:20}}>
            Steps</h3>
          <Row style={{marginLeft: 10}}>
            {/* First Row */}
            {faqData.steps.map((faq, index) => (
              <Col sm="4" key={index}>
                <LinkContainer to={"/docs/" + faq.title}>
                  <StyledSquare>
                    <h3 className="item-title">{faq.title}</h3>
                    <p className="item-desc">{faq.desc}</p>
                    {/* <a href="#" className="item-link">more</a> */}
                  </StyledSquare>
                </LinkContainer>
              </Col>
            ))}
          </Row>
          <h3 style={{borderBottom:"1px solid rgba(0,0,0,.12)", paddingBottom: 10,marginTop:45,paddingLeft:20}}>
            Tools</h3>
          <Row style={{marginLeft: 10}}>
            {/* First Row */}
            {faqData.tools.map((faq, index) => (
              <Col sm="4" key={index}>
                <LinkContainer to={"/tags/" + faq.title}>
                  <StyledSquare>
                    <h3 className="item-title">{faq.title}</h3>
                    <p className="item-desc">{faq.desc}</p>
                    {/* <a href="#" className="item-link">more</a> */}
                  </StyledSquare>
                </LinkContainer>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md="3">
          directory
        </Col>
      </Row>
    </Container>
  )
}
