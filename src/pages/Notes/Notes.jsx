import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Container, Button } from 'react-bootstrap'
import { NotesForm, NotesItem, NotesFinder } from './index'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { addNote, editNote, removeNote } from '../../store/Notes'
import { MdAdd } from 'react-icons/md'

export const NotesUI = ({
  notes,
  filters,
  addNote,
  editNote,
  removeNote,
}) => {
  const [formVisible, setFormVisible] = useState(false)
  const [searchText, setSearchText] = useState("")

  const toggleAddNote = (e) => {
    setFormVisible(!formVisible)
  }

  const onAddNote = (noteData) => {
    console.log('note data:', noteData)
    // add note to redux
    addNote(noteData)
  }

  const onEditNote = (noteData) => {
    // edit note in redux. note: will take some ui updates
    editNote(noteData)
  }

  const onRemoveNote = (noteId) => {
    // remove note from redux
    removeNote(noteId)
  }

  const onSearchNotes = (searchText) => {
    let searchResults = notes.filter(note => note.body.includes(searchText))
    console.log('search results:', searchResults)
  }

  const renderNotesArray = () => {
    if(searchText.length < 1)
      return notes

    let filteredNotes = notes.filter(note => note.body.includes(searchText))

    return filteredNotes
  }

  return (
    <Container>
      <StyledHeader>
        <h4>Your Notes</h4>
      </StyledHeader>
      
      <div style={{textAlign:'center', marginTop: 10}}>
        <NotesFinder
          searchText={searchText}
          setSearchText={setSearchText}
          onSearchNotes={onSearchNotes}
        />
        {/* <Button onClick={handleSearchNotes}>Search Notes</Button> */}
      </div>

      <div style={{marginTop:10}}>
        <Button onClick={toggleAddNote}>{formVisible ? "Cancel" : (
          <div className="btn-inner">
            <MdAdd />
            <span> New Note</span>
          </div>
        )}</Button>
      </div>

      {formVisible && (
        <div style={{margin:"10px 0",padding:"10px 0"}}>
          <NotesForm
            parentId="default"
            filters={filters}
            onAddNote={onAddNote}
            />
        </div>
      )}
      
      <section className="notes-section">
        <p style={{textAlign:'center'}}>Showing {renderNotesArray().length} of {notes.length} notes</p>
        <ul className="notes-list" style={{listStyle:'none'}}>
          {renderNotesArray().map((note, index) => (
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
  notes: state.notes.notes,
  filters: state.notes.filters,
})

export const Notes = connect(
  mapStateToProps,
  { addNote, editNote, removeNote }
)(NotesUI)