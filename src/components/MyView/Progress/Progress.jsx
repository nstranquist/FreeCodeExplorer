import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import { StyledHeader, StyledSubheader } from '../../../styles/Layout.style'


const StyledProgressItem = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  padding: 10px;
  font-size: 1.15rem;

  .progress-statistic {
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1.3rem;
  }
`

export const ProgressUI = ({
  userStats
}) => {
  const [period, setPeriod] = useState("week")
  const [statsData, setStatsData] = useState({})

  useEffect(() => {
    setStatsData({
      hoursWorked: userStats.hoursWorked,
      coursesCompleted: userStats.coursesCompleted,
      tasksCompleted: userStats.kanbanTasks,
    })
  }, [])

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value)
    updatePeriodStats()
  }

  const updatePeriodStats = () => {
    // update the stats data based on time period, after functionality works

  }

  return (
    <Container fluid>
      {/* Progress Header */}
      <StyledHeader>
        <h4>Progress</h4>
        <StyledSubheader>for period</StyledSubheader>
        <select onChange={handlePeriodChange}>
          <option>week</option>
          <option>month</option>
          <option>day</option>
        </select>
      </StyledHeader>

      {/* Progress Content */}
      <section className="progress-section">
        <StyledProgressItem>
          <h6>hours studied this {period}:
            <span className="progress-statistic"> {statsData.hoursWorked}</span></h6>
        </StyledProgressItem>
        <StyledProgressItem>
          <h6>courses completed this {period}: 
            <span className="progress-statistic"> {statsData.coursesCompleted}</span></h6>
        </StyledProgressItem>
        <StyledProgressItem>
          <h6>kanban tasks completed this {period}:
            <span className="progress-statistic"> {statsData.tasksCompleted}</span></h6>
        </StyledProgressItem>
      </section>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  userStats: state.profile.stats
})

export const Progress = connect(
  mapStateToProps,
  {  }
)(ProgressUI)