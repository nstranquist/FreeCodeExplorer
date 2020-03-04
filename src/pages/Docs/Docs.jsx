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
    text-align: center;
    margin-bottom: 0;
    min-height: 3rem;
    max-height: 3rem;
    height: 3rem;
    line-height: 1.5;
    font-size: 1rem;
    overflow-y: hidden;
    text-overflow: ellipsis;
  }
`

const StyledFAQHeader = styled.h3`
  margin-top: 50px;
  padding-left: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0,0,0,.12);
`

const StyledFAQSideMenu = styled.div`
  .faq-header {
    font-size: 1.8rem;
    margin-top: 10px;
  }

  .side-menu-list {
    margin-top: 12px;
    list-style: none;
    padding-left: 0;

    li {
      cursor: pointer;
      font-size: 1.05rem;
      margin-bottom: 4px;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const Docs = () => {

  const handleNavClick = (e) => {
    console.log('nav clicked event:', e)
    console.log('e.target.value:', e.target.value)
  }

  return (
    <Container fluid>
      <Row style={{marginTop:10}}>
        {/* FAQ */}
        <Col md="9">

          {/* 1) Steps */}
          <StyledFAQHeader>Steps</StyledFAQHeader>
          <Row style={{marginLeft: 10}}>
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

          {/* 2) Tools */}
          <StyledFAQHeader>Tools</StyledFAQHeader>
          <Row style={{marginLeft: 10}}>
            {/* First Row */}
            {faqData.tools.map((faq, index) => (
              <Col sm="4" key={index}>
                <LinkContainer to={"/tags/" + faq.title}>
                  <StyledSquare>
                    <h3 className="item-title">{faq.title}</h3>
                    <p className="item-desc">{faq.desc}</p>
                  </StyledSquare>
                </LinkContainer>
              </Col>
            ))}
          </Row>

          {/* 3) Community */}
          <StyledFAQHeader>Community</StyledFAQHeader>
          <Row style={{marginLeft: 10}}>
            {/* First Row */}
            {faqData.community.map((faq, index) => (
              <Col sm="4" key={index}>
                <LinkContainer to={"/tags/" + faq.title}>
                  <StyledSquare>
                    <h3 className="item-title">{faq.title}</h3>
                    <p className="item-desc">{faq.desc}</p>
                  </StyledSquare>
                </LinkContainer>
              </Col>
            ))}
          </Row>

          {/* 4) Support */}
          <StyledFAQHeader>Support</StyledFAQHeader>
          <Row style={{marginLeft: 10}}>
            {/* First Row */}
            {faqData.support.map((faq, index) => (
              <Col sm="4" key={index}>
                <LinkContainer to={"/tags/" + faq.title}>
                  <StyledSquare>
                    <h3 className="item-title">{faq.title}</h3>
                    <p className="item-desc">{faq.desc}</p>
                  </StyledSquare>
                </LinkContainer>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Side Menu */}
        <Col md="3">
          <StyledFAQSideMenu className="faq-side-menu">
            <h4 className="faq-header">Directory</h4>
            <ul className="side-menu-list" style={{listStyle:'none',paddingLeft:0}}
              onClick={handleNavClick}>
              <li>About</li>
              <li>FAQ</li>
              <li>Members</li>
              <li>Schools</li>
              <li>Resources</li>
              <li>Credits</li>
            </ul>
          </StyledFAQSideMenu>
        </Col>
      </Row>
    </Container>
  )
}
