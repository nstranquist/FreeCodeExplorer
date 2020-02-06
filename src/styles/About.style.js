import styled from 'styled-components'

export const StyledAboutSection = styled.section`
  width: 95%;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 1px;
  font-family: "sans-serif";

  .about-paragraph {
    margin-top: 2rem;
  }

  @media (min-width: 900px) {
    width: 66%;
  }
`