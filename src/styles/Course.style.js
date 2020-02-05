import styled from 'styled-components'

export const StyledCourseItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,.08);

  .left-side {
    display: inline-block;
    margin-right: 20px;
  }
  .right-side {
    flex: 1;

    p {
      margin: 0 !important;
    }
  }

  .course-title {
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 5px;
    font-weight: 500;
    cursor: pointer;
    font-size: 1.1rem;

    :hover {
      text-decoration: underline;
    }
  }
`
