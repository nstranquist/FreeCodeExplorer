import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addBoard, editBoard, removeBoard } from '../../store/KanBan'
import { StyledHeader } from '../../styles/Layout.style'
import { Container } from 'react-bootstrap'


const exampleBoard = {
  id: 'kdsfj;dijeklnd;lkd',
  name: "my-fun-project",
  goal: "to be a beastly coder",
  columns: [
  {
    id: 'adklfjddfklj',
    name: 'board 1',
    tasks: [
      {
        id: 'dfkljdkf',
        name: 'task 1',
        details: 'task 1 details blah blah',
      },
      {
        id: 'dfkjdlfkjlkdf',
        name: 'task 2',
        details: 'task 2 details kljflskdfj',
      }
    ]
  },
  {
    id: 'iourepioruk',
    name: 'board 2',
    tasks: [
      {
        id: 'hlkjdhfiulkj',
        name: 'task 1',
        details: 'task 1 details blah blah',
      },
      {
        id: 'cmvnkjdsfh',
        name: 'task 2',
        details: 'task 2 details kljflskdfj',
      }
    ]
  },
  {
    id: 'nchjdnfsd',
    name: 'board 3',
    tasks: [
      {
        id: 'asdfwe',
        name: 'task 1',
        details: 'task 1 details blah blah',
      },
      {
        id: 'poiuioj',
        name: 'task 2',
        details: 'task 2 details kljflskdfj',
      }
    ]
  },
]
}

const StyledBoard = styled.div`
  position: relative;
  height: calc(100vh;
  border: 1px solid rgba(0,0,0,.5);

  .kanban-header {
    background: rgba(0,0,0,.03);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 4px;
    padding-right: 4px;

    .kanban-header-left {
      display: flex;
      align-items: center;

      li {
        display: inline-block;
        padding: .6rem;
        margin: auto;
        outline: 1px solid rgba(0,0,0,.1);
        cursor: pointer;
        background: #fff;

        &:hover {
          background: rgba(0,0,0,.08);
        }
      }
    }
  }
  
  .kanban-section {
    background: rgba(0,0,0,.15);
    height: 100%;

    .board-column {
      margin: 4px;
      // margin-left: 4px;
      // margin-right: 2px;
      padding: 15px;
      width: 272px;
      background: rgba(255,255,255,.7);
      display: inline-block;
      height: auto;

      .board-column-header {
        //title input, add button, cancel button
        padding: 10px;
      }
      .board-item {
        background: rgba(255,255,255,1);
        color: black;
        padding: 15p
      }
    }
  }
`

export const BoardUI = ({

}) => {
  // board id in match params(?)
  // const [boardData, setBoardData] = useState({})


  const handleDrag = (e) => {
    console.log('dragging:', e)
  }
    
  // ** see Trello for inspiration here
  return (
    <Container fluid>
      {/* Sub Menu / Form Here (to add name, other details, etc) */}
      <StyledBoard>
        <header className="kanban-header">
          <ul className="kanban-header-left" style={{listStyle:'none', paddingLeft:0,marginBottom:0,paddingTop:5,paddingBottom:5}}>
            <li><strong>{exampleBoard.name}</strong></li>
            <li style={{marginLeft:10}}>{exampleBoard.goal}</li>
            {/* <li> */}
              {/* Icons, Buttons, other helpful shortcuts */}
            {/* </li> */}
          </ul>
          <div className="kanban-header-right">{new Date().toDateString()}</div>
        </header>

        {/* KanBan Content Here */}
        <section className="kanban-section">
          {/* varying number of columns, each column can be added to or edited, can move left and right */}
          {exampleBoard.columns.map((board, index) => (
            <div key={index} className="board-column" onDrag={handleDrag}>
              <header>title: {board.name}</header>
              {board.tasks.map(task => (
                <article className="board-item">
                  <h5>{task.name}</h5>
                  <p>{task.details}</p>
                </article>
              ))}
            </div>
          ))}
        </section>
      </StyledBoard>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  
})

export const Board = connect(
  mapStateToProps,
  { addBoard, editBoard, removeBoard }
)(BoardUI)