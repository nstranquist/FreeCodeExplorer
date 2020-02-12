import React from 'react'
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
      <StyledHeader>
        <h1>User's KanBan Board</h1>
      </StyledHeader>

      {/* Sub Menu / Form Here (to add name, other details, etc) */}
      <div className="submenu-form">
        <h3>project: {exampleBoard.name}</h3>
        <p>goal: {exampleBoard.goal}</p>
      </div>

      {/* KanBan Content Here */}
      <section className="kanban-section">
        {/* varying number of columns, each column can be added to or edited, can move left and right */}
        {exampleBoard.columns.map(board => (
          <div className="board-column" onDrag={handleDrag}>
            <header>title: {board.name}</header>
            {board.tasks.map(task => (
              <article className="task-item">
                <h5>{task.name}</h5>
                <p>{task.details}</p>
              </article>
            ))}
          </div>
        ))}
      </section>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  
})

export const Board = connect(
  mapStateToProps,
  { addBoard, editBoard, removeBoard }
)(BoardUI)