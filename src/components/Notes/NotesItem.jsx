import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { getDateFromTimestamp } from '../../utils/dateUtils'


const StyledNoteItem = styled.div`
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0,0,0,.33);
`

export const NotesItem = ({
  note,
  onEditNote,
  onRemoveNote
}) => {

  const handleEditNote = (e) => {
    console.log('clicked editNote')
  }

  const handleRemoveNote = () => {
    onRemoveNote(note.id)
  }

  return (
    <StyledNoteItem className="note-item">
        <div>parent id: {note.parentId}</div>
        <div>note: {note.body}</div>
        <div>time: {getDateFromTimestamp(note.timestamp).toDateString()}</div>
        <div>tags: {note.tags.map(tag => <span key={tag} style={{marginLeft:3}}>{tag}</span>)}</div>

        {/* If extras, map over them (sub-array?) */}
        <div className="note-item-button-options">
          <Button className="note-item-button" variant="info" onClick={handleEditNote}>Edit</Button>
          <Button className="note-item-button" variant="secondary" onClick={handleRemoveNote}>Remove</Button>
        </div>
    </StyledNoteItem>
  )
}
