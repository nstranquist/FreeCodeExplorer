import styled from 'styled-components'

export const StyledCourseItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(0,0,0,.08);

  .left-side {
    display: inline-block;
    margin-right: 20px;
  }
  .right-side {
    flex: 1;
  }
`