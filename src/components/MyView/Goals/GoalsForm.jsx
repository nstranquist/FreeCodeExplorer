import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const GoalsForm = ({
  onHandleSubmit,
}) => {
  const [goalsData, setGoalsData] = useState({})

  const handleChange = (e) => {
    setGoalsData({
      ...goalsData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // submit form data
    if(parseInt(goalsData.goalHoursPerDay) && parseInt(goalsData.goalHoursPerWeek) && parseInt(goalsData.goalHoursPerMonth)) {
      let newGoalsData = {
        ...goalsData,
        goalHoursPerDay: parseInt(goalsData.goalHoursPerDay),
        goalHoursPerWeek: parseInt(goalsData.goalHoursPerWeek),
        goalHoursPerMonth: parseInt(goalsData.goalHoursPerMonth),
      }
      console.log('submitted goals:', newGoalsData)
      onHandleSubmit(newGoalsData)
    }

    // resetGoals()
  }
  
  const resetGoals = () => setGoalsData({})

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label style={{marginRight:10}}>Hours of study per day?</Form.Label>
        <Form.Control type="text" name="goalHoursPerDay" onChange={handleChange}/>
      </Form.Group>
      <Form.Group>
        <Form.Label style={{marginRight:10}}>Hours of study per week?</Form.Label>
        <Form.Control type="text" name="goalHoursPerWeek" onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label style={{marginRight:10}}>Hours of study per month?</Form.Label>
        <Form.Control type="text" name="goalHoursPerMonth" onChange={handleChange} />
      </Form.Group>

      <Button type="submit" style={{display:'block', marginTop:10}}>Submit</Button>
    </Form>
  )
}
