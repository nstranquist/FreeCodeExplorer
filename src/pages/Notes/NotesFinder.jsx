import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { addNotesFilter, removeNotesFilter, resetNotesFilter } from '../../store/Notes'
import { RenderFilters } from './RenderFilters'


const filterValues = [
  "aws",
  "bezos",
  "firebase",
  "javascript",
  "react",
  "linkedin",
  "php",
  "etc",
]

// lets user search through their notes by category, text, tag, etc
// should be a modular component, able to be added to any other component
export const NotesFinderUI = ({
  // notes,
  filters,
  searchText,
  addNotesFilter,
  removeNotesFilter,
  resetNotesFilter,
  setSearchText,
  onSearchNotes
}) => {

  const handleSearchChange = (e) => {
    console.log('search value:', e.target.value)
    setSearchText(e.target.value)
    // filter through notes for based on search value
    onSearchNotes(e.target.value)
  }

  const handleFiltersChange = (e) => {
    addNotesFilter(e.target.value)
    // remove the option from the filter <select>
  }

  const handleRemoveFilter = (filter) => {
    removeNotesFilter(filter)
    // add the option back to the filter <select>
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // could check here if filter is already included

  }

  const resetFilters = (e) => {
    resetNotesFilter([])
  }

  return (
    <div className="notes-finder">
      {/* Search Section */}
      <Form onSubmit={handleSubmit} className="notes-finder-form">
        <h6>Search Notes:</h6>
        <Form.Group>
          <input type="text" name="searchNotes" value={searchText} onChange={handleSearchChange} />
        </Form.Group>
      </Form>

      <Form onSubmit={handleSubmit} style={{marginTop: 10, marginBottom:10, paddingTop: 5, paddingBottom: 5}}>
        <h6>Set Filter:</h6>
        <Form.Group className="note-filter-group">
          {/* <input type="text" name="notesFilter" value={filtersData} onChange={handleFiltersChange} /> */}
          <Form.Control as="select" onChange={handleFiltersChange} style={{display:'inline-block', width:'initial'}}>
            {filterValues.map(filter => (
              <option key={filter} value={filter}>{filter}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <RenderFilters
          filters={filters}
          handleRemoveFilter={handleRemoveFilter}
        />

        <Button type="submit">Search</Button>
        <Button variant="light" onClick={resetFilters} style={{marginLeft:10}}>
          Reset Filters</Button>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  notes: state.notes.notes,
  filters: state.notes.filters,
  // notesByCategory: selectNotesWithCategory(state)
})

export const NotesFinder = connect(
  mapStateToProps,
  { addNotesFilter, removeNotesFilter, resetNotesFilter  }
)(NotesFinderUI)