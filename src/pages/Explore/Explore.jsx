import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Row, Col, Form } from 'react-bootstrap'
// import { CheckSelect } from '../../components/Inputs/CheckSelect'
import { popularCoursesData } from '../../data/CoursesData'
import { ResultItem } from './ResultItem'


const StyledExploreMenu = styled.div`
  .header {
    margin-bottom: 10px;
    h1 {
      font-size: 2rem;
      font-weight:500;
    }
  }
  .languages-list {
    list-style: none;
    padding-left: 10px;

    .languages-list-item {
      margin-top: 2px;
      margin-bottom: 2px;
      opacity: .8;
      font-family: sans-serif;
      color: #000;
      display: block;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
      .icon-left {
        float: left;
      }
      .language-text {
        margin-bottom: 0;
        padding-bottom: 0;

        .badge-left {
          padding-right: 6px;
          opacity: .85;
        }
        .badge-right {

        }
      }
      // .icon-right {
        // float: right;
      // }
    }
  }
`
const StyledToolbar = styled.div`
  // box-shadow: 5px 10px 30px rgba(0,0,0,.08);
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding-top: 10px;
  padding-bottom: 10px;
`
const StyledResults = styled.div`
  padding-top: 20px;
`

export const ExploreUI = ({
  explore
}) => {
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const submitSearch = (e) => {
    console.log('search with e:', e)
  }

  const handleLangClick =(e) => {
    console.log("sidebar clicked event:", e)
    console.log("event.target:", e.target)
    console.log("target key:", e.target.key)
  }

  return (
    <Container>
      {/* Search Bar */}
      <Row style={{paddingTop:15}}>
        <Col sm="4" md="3">
          {/* SideMenu */}
          <StyledExploreMenu className="explore-menu">
            <header className="header">
              <h1>Explore</h1>
            </header>
            <ul className="languages-list" onClick={handleLangClick}>
              {/* note: would be cool if could click '+' */}
              {/*       and see the frameworks, tags, etc */}
              <li className="languages-list-item" key="javascript">
                {/* <span className="icon-left">+</span> */}
                <p className="language-text">
                  <span className="badge-left">-</span>
                  JavaScript
                  <span className="badge-right">(30)</span>
                </p>
              </li>
              <li className="languages-list-item" key="python">
                {/* <span className="icon-left">+</span> */}
                <p className="language-text">
                  <span className="badge-left">-</span>
                  Python
                  <span className="badge-right">(30)</span>
                </p>
              </li>
              <li className="languages-list-item" key="java">
                {/* <span className="icon-left">+</span> */}
                <p className="language-text">
                  <span className="badge-left">-</span>
                  Java
                  <span className="badge-right">(25)</span>
                </p>
              </li>
              <li className="languages-list-item" key="c#">
                {/* <span className="icon-left">+</span> */}
                <p className="language-text">
                  <span className="badge-left">-</span>
                  C#
                  <span className="badge-right">(25)</span>
                </p>
              </li>
            </ul>
          </StyledExploreMenu>
        </Col>
        <Col sm="8" md="9">
          {/* Search Result (Main Section) */}
          <StyledToolbar className="explore-toolbar" 
            style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
            <div className="filter-results">
              <select name="contentType" className="select-filter">
                {/* Shown by default: */}
                <option value="course">Course</option>
                <option value="video">Video</option>
                {/* Not shown by default: */}
                <option value="article">Article</option>
                <option value="project">Project</option>
              </select>
              {/* <div className="filter-results">
                <CheckSelect />
              </div> */}
            </div>
            <div className="search-bar">
              <Form onSubmit={submitSearch} className="search-form">
                <label>search</label>
                <input type="search" onChange={handleSearch} />
              </Form>
            </div>
          </StyledToolbar>
          <div className="results-count" style={{textAlign:'center',marginTop:15}}>
            <p style={{marginBottom:0}}>showing 10 of 20 results for javascript</p>
          </div>
          <StyledResults>
            {popularCoursesData.courses.map((course, index) => (
              <ResultItem
                key={index}
                course={course}
              />
            ))}
            <div className="pagination-container" style={{marginBottom:20}}>
              <div className="btn-group" style={{textAlign:'center', display:'block'}}>
                <button className="btn btn-light" style={{margin:"15px auto", marginRight:10}}>Last Page</button>
                <button className="btn btn-primary" style={{margin:"15px auto", marginLeft:10}}>Next Page</button>
              </div>
            </div>
          </StyledResults>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  explore: state.explore
})

export const Explore = connect(
  mapStateToProps,
  {  }
)(ExploreUI)


// old code:
      
      /* <Row> */
        /* Menu Bar that shows active category, can change */
        /* <Col>
          <div className="explore-menu-bar">

          </div> 
        </Col>
      </Row> */

      /* Grid of Cards to Click on based on category */
      /* <Row>
        {categoriesData.map(category => (
          <Col>
            <LinkContainer to="/explore">
              <StyledResultItem>
                <h1 className="item-title">{category.name}</h1>
              </StyledResultItem>
            </LinkContainer>
          </Col>
        ))}
      </Row> */