import React, { useState } from 'react'
//import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { GoalsForm } from './GoalsForm'
import { isObjectEmpty } from '../../../utils/isObjectEmpty'


const exampleGoals = {
  id: 'dkfjlkdf',
  name: 'my-goals',
  goals: [
    {
      id: 'dkfjldfk',
      name: 'first goal',
    },

  ]
}

export const Goals = () => {
  const [goals, setGoals] = useState({})

  const onHandleSubmit = goalsData => {
    //or send the data somewhere, and have that update goals list
    //update the goals list with goalsData
    setGoals(goalsData)
  }

  return (
    <Container fluid style={{paddingTop: 15, paddingBottom: 15}}>
      {/* Goals Form */}
      <GoalsForm
        onHandleSubmit={onHandleSubmit}
      />

      {/* Goals List */}
      {!isObjectEmpty(goals) && (
        <div className="goals-section" style={{padding:10, marginTop:5, marginBottom:5}}>
          <h4>{exampleGoals.name}</h4>
          <ul className="goals-list">
            <li className="goals-item">hours/day: {goals.goalHoursPerDay}</li>
            <li className="goals-item">hours/week: {goals.goalHoursPerWeek}</li>
            <li className="goals-item">hours/month: {goals.goalHoursPerMonth}</li>
          </ul>
        </div>
      )}
    </Container>
  )
}
