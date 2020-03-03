import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { CheckSelect } from '../../components/Inputs/CheckSelect'


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

`
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
            <ul className="languages-list">
              {/* note: would be cool if could click '+' */}
              {/*       and see the frameworks, tags, etc */}
              <li className="languages-list-item">
                {/* <span className="icon-left">+</span> */}
                <p className="language-text">
                  <span className="badge-left">-</span>
                  JavaScript
                  <span className="badge-right">(30)</span>
                </p>
              </li>
              <li className="languages-list-item">
                {/* <span className="icon-left">+</span> */}
                <p className="language-text">
                  <span className="badge-left">-</span>
                  Python
                  <span className="badge-right">(30)</span>
                </p>
              </li>
              <li className="languages-list-item">
                {/* <span className="icon-left">+</span> */}
                <p className="language-text">
                  <span className="badge-left">-</span>
                  Java
                  <span className="badge-right">(25)</span>
                </p>
              </li>
              <li className="languages-list-item">
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
            style={{display:'flex',justifyContent:'space-between'}}>
            <div className="filter-results">
              <select name="contentType" className="select-filter">
                {/* Shown by default: */}
                <option value="playlist">Playlist</option>
                <option value="video">Video</option>
                {/* Not shown by default: */}
                <option value="article">Article</option>
                <option value="project">Project</option>
              </select>
            </div>
            <div className="filter-results">
              <CheckSelect />
            </div>
            <div className="search-bar">
              <Form onSubmit={submitSearch} className="search-form">
                <label>search</label>
                <input type="search" onChange={handleSearch} />
              </Form>
            </div>
          </StyledToolbar>
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