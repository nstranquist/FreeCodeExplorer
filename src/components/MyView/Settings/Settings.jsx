import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { StyledHeader, StyledSubheader } from '../../../styles/Layout.style'


const StyledSettingsList = styled.div`

  .settings-item {
    border-bottom: 1px solid rgba(0,0,0,.075);
    padding-top: 10px;
    
    &:last-child {
      border-bottom: none;
    }
  }
`
const StyledSettingsMenu = styled.div`

  .settings-menu-list {
    list-style: none;
    padding-left: 0;
    border: 1px solid rgba(0,0,0,.1);

    .settings-menu-item {
      padding:6px 10px;
      border-bottom: 1px solid rgba(0,0,0,.1);
      font-size: 1rem;

      &:hover {
        background: rgba(0,0,0,.04);
        transition: .1s ease-in-out;
        cursor: pointer;
      }
    }
  }
`

export const Settings = () => {

  const handleClick = (e) => {
    // useRef??
    console.log('event:', e)
  }

  return (
    <Container>
      <StyledHeader>
        <h1>Settings</h1>
        {/* <StyledSubheader></StyledSubheader> */}
      </StyledHeader>

      <Row>
        <Col md="3">
          {/* Settings SideMenu */}
          <StyledSettingsMenu>
            <ul className="settings-menu-list" onClick={handleClick}>
              <li className="settings-menu-item">General</li>
              <li className="settings-menu-item">Profile</li>
              <li className="settings-menu-item">Preferences</li>
              <li className="settings-menu-item">Account</li>
              <li className="settings-menu-item">Privacy</li>
            </ul>
          </StyledSettingsMenu>
        </Col>
        <Col md="9">
          <StyledSettingsList>
            <div className="settings-item">
              <h4>title</h4>
              <p>description description description description</p>
            </div>
            <div className="settings-item">
              <h4>title</h4>
              <p>description description description description</p>
            </div>
            <div className="settings-item">
              <h4>title</h4>
              <p>description description description description</p>
            </div>
            <div className="settings-item">
              <h4>title</h4>
              <p>description description description description</p>
            </div>
            <div className="settings-item">
              <h4>title</h4>
              <p>description description description description</p>
            </div>
            <div className="settings-item">
              <h4>title</h4>
              <p>description description description description</p>
            </div>
          </StyledSettingsList>
        </Col>
      </Row>
    </Container>
  )
}
