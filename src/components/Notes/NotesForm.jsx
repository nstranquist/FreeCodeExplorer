import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { isObjectEmpty } from '../../utils/isObjectEmpty'
import { RenderFilters } from './index'


const filterValues = [
  "aws",
  "bezos",
  "firebase",
  "javascript",
  "react",
  "linkedin",
  "etc",
]

// const emptyNotesForm = {
//   parentId: 'default',
//   body: '',
//   tags: [],
// }

// this component will need to be truly modular, so that it can be included inside of other, unrelated components
export const NotesForm = ({
  parentId, // id of item the notes pertains to
  filters,
  onAddNote, // from redux, takes in parentId
}) => {
  const [noteData, setNoteData] = useState({ body: "", tags: [] }) // use a useEffect() hook to set the initial formData?

  useEffect(() => {
    if(!parentId)
      setNoteData({
        ...noteData,
        parentId: "default",
      })
    else
      setNoteData({
        ...noteData,
        parentId
      })
  }, [])

  const handleChange = (e) => {
    
    if(e.target.name==='tags') {
      let newTags = [...noteData.tags]
      newTags.push(e.target.value)
      setNoteData({
        ...noteData,
        tags: newTags
      })
      console.log('new tags:', newTags)
    }
    setNoteData({
      ...noteData,
      [e.target.name]: e.target.value
    })
  }

  const handleRemoveTag = (tagName) => {
    setNoteData({
      ...noteData,
      tags: noteData.tags.filter(tag => tag !== tagName)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isObjectEmpty(noteData)) {
      console.log('noteData object is empty:', noteData)
      return;
    }
    
    // submit form data
    onAddNote(noteData)

    // reset form
    resetForm()
  }

  const resetForm = () => {
    console.log('reset form')
    setNoteData({ body: "" })
  }

  return (
    <Form className="user-notes-container" onSubmit={handleSubmit}>
      {/* Subject / Item pertains to (could make a <select> input) */}
      <p className="form-id">parentId: {noteData.parentId}</p>

      {/* Notes box */}
      <Form.Group>
        <Form.Control as="textarea" name="body" autoFocus value={noteData.body} onChange={handleChange} />
      </Form.Group>
      <Form.Group>
        <Form.Control as="select" name="tags" onChange={handleChange}>
          {filterValues.map(filter => (
            <option value={filter}>{filter}</option>
          ))}
        </Form.Control>

        <RenderFilters
          filters={filters}
          handleRemoveFilter={handleRemoveTag}
        />
      </Form.Group>

      {/* Add additional Note modules (button) */}


      {/* Submit / Save note (button) */}
      <Button variant="light" type="submit">Save</Button>
    </Form>
  )
}
