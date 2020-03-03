

// Explore Types
const SET_LANGUAGE = 'SET_LANGUAGE'
const ADD_FILTER = 'ADD_FILTER'
const REMOVE_FILTER = 'REMOVE_FILTER'
const CLEAR_FILTERS = 'CLEAR_FILTERS'
const RESET_FILTERS = 'RESET_FILTERS'
const SET_ERROR = 'SET_ERROR'


// Explore Actions
export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    language
  }
}
export const addFilter = (filter) => {
  return {
    type: ADD_FILTER,
    filter
  }
}
export const removeFilter = (filter) => {
  return {
    type: REMOVE_FILTER,
    filter
  }
}
export const clearFilters = () => ({
  type: CLEAR_FILTERS,
})
export const resetFilters = () => ({
  type: RESET_FILTERS,
})
export const setError = (err) => {
  return {
    type: SET_ERROR,
    err
  }
}


// Explore Reducer
const initialState = {
  language: "all",
  filters: ["videos", "courses"], // the default values
  errors: null
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    case ADD_FILTER:
      if(state.filters.indexOf(action.filter) > -1) {
        return {
          ...state,
          filters: [
            ...state.filters,
            filter
          ]
        }
      }
      return state;
    case REMOVE_FILTER:
      if(state.filters)
      return {
        ...state,
        filters: state.filters.filter(filter => filter !== action.filter)
      }
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: []
      }
    case RESET_FILTERS:
      return {
        ...state,
        filters: ["videos", "courses"]
      }
    case SET_ERROR:
      return {
        ...state,
        errors: action.err
      }
  }
}