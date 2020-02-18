import React, { useState } from 'react'
import { connect } from 'react-redux'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { Button } from 'react-bootstrap'
import { removeBoard } from '../../store/KanBan'
import { LinkContainer } from 'react-router-bootstrap'
import { MdAdd } from 'react-icons/md'

export const KanBanUI = ({
  boards
}) => {

  // this is still in the "/my/:name" section of views
  // user can navigate to the full kanban app after clicking appropriate link/button
  return (
    <div>
      <StyledHeader>
        <h1>KanBan</h1>
        <StyledSubheader>
          Get yours productivity on!
        </StyledSubheader>
      </StyledHeader>

      <LinkContainer to="/kanban">

        <Button>
          <MdAdd style={{fontSize:24, marginRight:2}} />
          New Board</Button>
      </LinkContainer>

      {/* See All Boards */}
      <ul className="user-kanban-boards">
        {boards.map(board => (
          <li key={board.id} className="board-item">
            <p>board id: {board.id}</p>
            <p>board name: {board.name}</p>
            {/* board length, board columns, board items, board theme, board description, board date, etc. */}
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  boards: state.kanban.boards,

})

export const KanBan = connect(
  mapStateToProps,
  { removeBoard }
)(KanBanUI)
