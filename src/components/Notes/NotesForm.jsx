import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import { isObjectEmpty } from '../../utils/isObjectEmpty'
import { addNote } from '../../store/Notes'


// const emptyNotesForm = {
//   id: '',
//   notesBody: '',
// }

// this component will need to be truly modular, so that it can be included inside of other, unrelated components
export const NotesUI = ({
  parentId, // id of item the notes pertains to
  addNote, // from redux, takes in parentId
}) => {
  const [noteData, setNoteData] = useState({})

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
    addNote(parentId, noteData)

    // reset form
    resetForm()
  }

  const resetForm = () => setNoteData({})

  return (
    <Form className="user-notes-container" onSubmit={handleSubmit}>
      {/* Subject / Item pertains to */}
      <p className="form-id">id: {parentId}</p>

      {/* Notes box */}
      <Form.Group>
        <Form.Control as="textarea" name="noteBody" onChange={handleChange} />
      </Form.Group>

      {/* Add additional Note modules (button) */}

      {/* Submit / Save note (button) */}

    </Form>
  )
}

export const NotesForm = connect(
  null,
  { addNote }
)(NotesUI)