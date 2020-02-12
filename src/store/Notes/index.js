import uuidv4 from 'uuid/v4'
import { getCurrentTimestamp } from '../../utils/dateUtils'

// Notes Types
const ADD_NOTE = 'ADD_NOTE'
const EDIT_NOTE = 'EDIT_NOTE'
const REMOVE_NOTE = 'REMOVE_NOTE'
const ADD_FILTER = 'ADD_FILTER'
const REMOVE_FILTER = 'REMOVE_FILTER'
const RESET_FILTER = 'RESET_FILTER'


// Notes Actions
export const addNote = (noteData) => {
  return {
    type: ADD_NOTE,
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

export const addNotesFilter = (filter) => {
  return {
    type: ADD_FILTER,
    filter
  }
}

export const removeNotesFilter = (filter) => {
  return {
    type: REMOVE_FILTER,
    filter
  }
}

export const resetNotesFilter = () => {
  return {
    type: RESET_FILTER,
  }
}

// addNoteFilter
// resetNotesFilter
// removeNoteFilter

// Notes Reducer
const initialState = {
  notes: [], // id, parentId, tags, [...notesData] = { notesBody, details: [] }
  filters: [],
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
            id: uuidv4(),
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
    case ADD_FILTER:
      return {
        ...state,
        filters: [
          ...state.filters,
          action.filter,
        ]
      }
    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(filter => filter !== action.filter)
      }
    case RESET_FILTER:
      // check if filter already exists in state
      return {
        ...state,
        filters: []
      }
    default:
      return state
  }
}
