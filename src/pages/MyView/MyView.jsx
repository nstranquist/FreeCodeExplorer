import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Home } from '../Home'
import { SideView } from './SideView'
import { Goals, Progress, Settings } from './index'
import { Notes } from '../Notes'
import { AllCourses, MyCourses } from '../Courses'
import { SubMenu } from '../../components/layout'
import { KanBan } from '../KanBan'

export const MyViewUI = ({
}) => {
  const [paramActive, setParamActive] = useState(false)

  return (
    <main className="myview-container">
      {/* Courses SubMenu */}
      <SubMenu />

      {/* Main Content */}
      <Container fluid>
        <Row>
          <Col md="3" style={{margin:0,padding:0}}>
            {/* SideMenu Column */}
            <SideView />
          </Col>
          <Col md="9" style={{margin:0,padding:0}}>
            {/* TODO: Async HOC? */}
            <Route path="/my/:name" render={({ match }) => {
              console.log("name:", match.params.name)
              setParamActive(true)
              switch(match.params.name) {
                case 'notes': 
                  return <Notes />
                case 'progress':
                  return <Progress />
                case 'goals':
                  return <Goals />
                case 'courses':
                  return <MyCourses />
                case 'settings':
                  return <Settings />
                case 'home':
                  return <Home />
                case 'kanban':
                  return <KanBan />
                case 'all-courses':
                  return <AllCourses />
                default:
                  console.log('default match.params.name')
                  return <Home />
              }
            }} />
            {!paramActive && (
              <Home />
            )}
          </Col>
        </Row>
      </Container>
    </main>
  )
}

const mapStateToProps = (state) => ({
  
})

export const MyView = connect(
  mapStateToProps,
  {  }
)(MyViewUI)