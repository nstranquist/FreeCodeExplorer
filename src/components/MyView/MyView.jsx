import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { SubMenu } from '../Courses'
import { Home } from '../Home/Home'
import { SideView } from './SideView'
import { Route } from 'react-router-dom'
import { Progress } from './Progress'
import { Goals } from './Goals'
import { NotesList } from '../Notes'
import { MyCourses } from '../Courses'
import { Settings } from './Settings'
import { KanBan } from '../KanBan'

export const MyViewUI = ({
}) => {

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
            <Route path="/my/:name" render={({ match }) => {
              console.log("name:", match.params.name)

              switch(match.params.name) {
                case 'notes': 
                  return <NotesList />
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
                default:
                  console.log('default match.params.name')
                  return <Home />
              }
            }} />
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