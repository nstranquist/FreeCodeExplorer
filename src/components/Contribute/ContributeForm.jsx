import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const emptyContributeForm = {
  subject: "default",
  body: "",
  isContactable: false,
}

export const ContributeForm = ({
  onHandleSubmit
}) => {
  const [formData, setFormData] = useState(emptyContributeForm)
  const [formError, setFormError] = useState(null)
  const [complete, setComplete] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(formData.subject === "default") {
      setFormError("please select a subject")
      return;
    }

    if(formData.subject && formData.body) {
      if(formData.body.length <= 1000) {
        // submit form data
        onHandleSubmit(formData)

        resetForm()
      } else {
        setFormError("your feedback was too long")
      }
    } else {
      setFormError("your feedback is missing either the subject or body")
    }
  }

  const resetForm = () => {
    setComplete(true)
    setFormData(emptyContributeForm)
    setFormError(null)
  }

  if(complete)
    return <Redirect to="/home" />

  return (
    <Form onSubmit={handleSubmit}>
      {formError && (
        <div style={{textAlign:'center'}}>
          <p style={{color:'red',fontSize:'1rem'}}>{formError}</p>
        </div>
      )}
      {/* Form Subject (can be a dropdown) */}
      <Form.Group>
        <Form.Label>Subject</Form.Label>
        <Form.Control as="select" name="subject" value={formData.subject} onChange={handleChange} >
          <option value={"default"}>-----Select One-----</option>
          <option>Missing Data</option>
          <option>New Feature Suggestion</option>
          <option>Current Feature Improvement</option>
          <option>Desired Collaboration</option>
          <option>Other Reason / Unspecified</option>
        </Form.Control>
      </Form.Group>

      {/* Form Message */}
      <Form.Group>
        <Form.Label>Your Feedback</Form.Label>
        <Form.Control as="textarea" name="body" value={formData.body} onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Do you wish to be contacted by us?</Form.Label>
        <Form.Check name="isContactable" value={formData.isContactable} onChange={handleCheckChange} />
      </Form.Group>

      {formData.isContactable && (
        <>
          <Form.Group>
            <Form.Label>Please enter your name</Form.Label>
            <Form.Control name="contactName" onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Please enter your email</Form.Label>
            <Form.Control type="email" name="contactEmail" onChange={handleChange} />
          </Form.Group>
        </>
      )}

      {/* Form Submit */}
      <Button type="submit">Send Feedback</Button>
    </Form>
  )
}
