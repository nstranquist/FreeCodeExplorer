

// KanBan action definitions
const ADD_BOARD = 'ADD_BOARD'
const EDIT_BOARD = 'EDIT_BOARD'
const REMOVE_BOARD = 'REMOVE_BOARD'
const SET_LOADING = 'SET_LOADING'
const SET_ERRORS = 'SET_ERRORS'


// KanBan actions
export const addBoard = (boardData) => {
  console.log('adding kanban board with data:', boardData)
  return {
    type: ADD_BOARD,
    boardData
  }
}

export const editBoard = (boardData) => {
  console.log('editing kanban board with id:', boardData.id)
  return {
    type: EDIT_BOARD,
    boardData
  }
}

export const removeBoard = (id) => {
  console.log('removing kanban board with id:', id)
  return {
    type: REMOVE_BOARD,
    id
  }
}


// KanBan Reducer
const initialState = {
  boards: [],
  loading: false,
  errors: null
}

const KanBanReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.boardData]
      }
    case EDIT_BOARD:
      return {
        ...state,
        boards: state.boards.map(board => {
          if(board.id === action.boardData.id) {
            return { ...board, ...action.boardData }
          }
        })
      }
    case REMOVE_BOARD:
      return {
        ...state,
        boards: state.boards.filter(board => board.id !== action.id)
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_ERRORS:
      return {
        ...state,
        errors: action.err
      }
    default:
      return state;
  }
}



export default KanBanReducer