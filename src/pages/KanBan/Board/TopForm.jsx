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

const emptyForm = {
  title: ""
}

export const TopForm = ({
  match,
  // onHandleSubmit,
}) => {
  // for boardHeaders
  const [formData, setFormData] = useState(emptyForm)

  useEffect(() => {
    console.log('match from props:', match)
    // get the id from /board/:id
    // fill in the form with appropriate data
    setFormData(emptyForm) // with item data inside object
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
    console.log('formData:', formData)
    // onHandleSubmit(formData)
    
    resetForm()
  }
  
  const resetForm = () => setFormData(emptyForm)
  

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
