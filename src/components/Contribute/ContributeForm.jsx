import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const ContributeForm = ({
  onHandleSubmit
}) => {
  const [formData, setFormData] = useState({})
  const [formError, setFormError] = useState(null)

  const handleChange = (e) => {
    console.log('name:', e.target.name, "value:", e.target.value)

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(formData.subject && formData.body) {
      if(formData.body.length <= 1000) {
        // submit form data
        //onHandleSubmit(formData)

        resetForm()
      } else {
        setFormError("your feedback was too long")
      }
    } else {
      setFormError("your feedback is missing either the subject or body")
    }
  }

  const resetForm = () => {
    setFormData({})
    setErrors(null)
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* Form Subject (can be a dropdown) */}
      <Form.Group>
        <Form.Label>Subject</Form.Label>
        <Form.Control as="select" name="subject" onChange={handleChange} >
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
        <Form.Control as="textarea" name="body" defaultValue="" onChange={handleChange} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Do you wish to be contacted by us?</Form.Label>
        <Form.Control as="checkbox" name="isContactable" defaultValue={false} onChange={handleChange} />
      </Form.Group>

      {formData.isContactable && (
        <>
          <Form.Group>
            <Form.Label>Please enter your name</Form.Label>
            <Form.Control as="text" name="contactName" onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Please enter your email</Form.Label>
            <Form.Control as="email" name="contactEmail" onChange={handleChange} />
          </Form.Group>
        </>
      )}

      {/* Form Submit */}
      <Button type="submit">Send Feedback</Button>
    </Form>
  )
}
