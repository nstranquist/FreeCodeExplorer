import React from 'react'
import { Button } from 'react-bootstrap'
import { getDateFromTimestamp } from '../../utils/dateUtils'

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
    <div className="note-item" style={{marginTop:15, paddingBottom:15, borderBottom:"1px solid rgba(0,0,0,.33)"}}>
        <div>parent id: {note.parentId}</div>
        <div>note: {note.body}</div>
        <div>time: {getDateFromTimestamp(note.timestamp).toDateString()}</div>

        {/* If extras, map over them (sub-array?) */}
        <div className="note-item-button-options">
          <Button className="note-item-button" variant="info" onClick={handleEditNote}>Edit</Button>
          <Button className="note-item-button" variant="secondary" onClick={handleRemoveNote}>Remove</Button>
        </div>
    </div>
  )
}
