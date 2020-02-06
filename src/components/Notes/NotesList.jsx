import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Button } from 'react-bootstrap'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { addNote, editNote, removeNote } from '../../store/Notes'
import { NotesForm } from './NotesForm'
import { NotesItem } from './NotesItem'

export const NotesListUI = ({
  notes,
  addNote,
  editNote,
  removeNote,
}) => {
  const [formVisible, setFormVisible] = useState(false)

  const toggleAddNote = (e) => {
    setFormVisible(!formVisible)
  }

  const onAddNote = (parentId, noteData) => {
    console.log('parent id:', parentId, 'note data:', noteData)
    // add note to redux
    addNote(parentId, noteData)
  }

  const onEditNote = (parentId, noteData) => {
    // edit note in redux. note: will take some ui updates
    editNote(parentId, noteData)
  }

  const onRemoveNote = (noteId) => {
    // remove note from redux
    removeNote(noteId)
  }

  return (
    <Container>
      <StyledHeader>
        <h4>Your Notes</h4>
        <StyledSubheader>Showing {notes.length} notes</StyledSubheader>
      </StyledHeader>

      <div style={{marginTop:10}}>
        <Button onClick={toggleAddNote}>{formVisible ? "Cancel" : "Add New Note"}</Button>
      </div>

      {formVisible && (
        <div style={{margin:"10px 0",padding:"10px 0"}}>
          <NotesForm
            parentId="default"
            onAddNote={onAddNote}
            />
        </div>
      )}
      
      <section className="notes-section">
        <ul className="notes-list" style={{listStyle:'none'}}>
          {notes.map((note, index) => (
            // Note Item:
            <li key={index}>
              <NotesItem
                note={note}
                onEditNote={onEditNote}
                onRemoveNote={onRemoveNote}
              />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes.notes
})

export const NotesList = connect(
  mapStateToProps,
  { addNote, editNote, removeNote }
)(NotesListUI)