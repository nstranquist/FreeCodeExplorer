import { getCurrentTimestamp } from '../../utils/dateUtils'

// Notes Types
const ADD_NOTE = 'ADD_NOTE'
const EDIT_NOTE = 'EDIT_NOTE'
const REMOVE_NOTE = 'REMOVE_NOTE'


// Notes Actions
export const addNote = (parentId, noteData) => {
  return {
    type: ADD_NOTE,
    parentId,
    noteData
  }
}

export const editNote = (parentId, noteData) => { // parentId is null? or just same as before if not changed?
  return {
    type: EDIT_NOTE,
    parentId,
    noteData
  }
}

export const removeNote = (noteId) => {
  return {
    type: REMOVE_NOTE,
    noteId
  }
}


// Notes Reducer
const initialState = {
  notes: [] // id, parentId, [...notesData] = { notesBody, details: [] }
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            ...action.noteData,
            parentId: action.parentId,
            timestamp: getCurrentTimestamp()
          }
        ],
      }
    case EDIT_NOTE:
      // map existing notes in state, updating note where ids match, returning new notes array
      let newNotes = state.notes.map(note => {
        // note: this assumes parentId matches, editing that is not available yet
        if(note.id === action.noteData.id) {
          // edit the note
          return {...note, ...action.noteData}
        }
      })
      console.log('newNotes in reducer:', newNotes)
      return {
        ...state,
        notes: newNotes
      }
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.noteId)
      }
    default:
      return state
  }
}
