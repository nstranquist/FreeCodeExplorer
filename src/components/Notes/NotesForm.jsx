import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { isObjectEmpty } from '../../utils/isObjectEmpty'
import { addNote } from '../../store/Notes'


// add date timestamp

const emptyNotesForm = {
  id: 'default',
  body: '',
}

// this component will need to be truly modular, so that it can be included inside of other, unrelated components
export const NotesUI = ({
  parentId, // id of item the notes pertains to
  onAddNote, // from redux, takes in parentId
}) => {
  const [noteData, setNoteData] = useState(emptyNotesForm) // use a useEffect() hook to set the initial formData?

  const handleChange = (e) => {
    setNoteData({
      ...noteData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // check if empty object (source: https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object#32108184)
    if(isObjectEmpty(noteData)) {
      console.log('noteData object is empty:', noteData)
      return;
    }
    
    // submit form data
    onAddNote(parentId, noteData)

    // reset form
    resetForm()
  }

  const resetForm = () => {
    console.log('reset form')
    setNoteData(emptyNotesForm)
  }

  return (
    <Form className="user-notes-container" onSubmit={handleSubmit}>
      {/* Subject / Item pertains to (could make a <select> input) */}
      <p className="form-id">id: {parentId}</p>

      {/* Notes box */}
      <Form.Group>
        <Form.Control as="textarea" name="body" value={noteData.body} onChange={handleChange} />
      </Form.Group>

      {/* Add additional Note modules (button) */}


      {/* Submit / Save note (button) */}
      <Button variant="light" type="submit">Save</Button>
    </Form>
  )
}

export const NotesForm = connect(
  null,
  { addNote }
)(NotesUI)