import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const StyledKanbanHeader = styled.div`
  background: rgba(0,0,0,.04);

  .kanban-header-form {


    .form-item{


      label {
        font-size: .9rem;
      }
    }
  }
`

export const TopForm = ({
  match
}) => {
  const [boardHeaderData, setBoardHeaderData] = useState({})

  useEffect(() => {
    console.log('match from props:', match)
    // get the id from /board/:id
    // fill in the form with appropriate data
    setBoardHeaderData({}) // with item data inside object
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // submit form data
    
    
    resetForm()
  }
  
  const resetForm = () => setFormDat({})
  

  return (
    <StyledKanbanHeader className="kanban-header">
      <form className="kanban-header-form" onSubmit={handleSubmit}>
        <p className="form-item">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleChange} />
        </p>
      </form>
    </StyledKanbanHeader>
  )
}
