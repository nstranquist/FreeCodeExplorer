import React from 'react'

import { Container } from 'react-bootstrap'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { StyledAboutSection } from '../../styles/About.style'

export const About = ({

}) => {

  return (
    <Container>
      <StyledHeader>
        <h2>About</h2>
        <StyledSubheader>-- About FreeCodeExplorer --</StyledSubheader>
      </StyledHeader>
      
      <StyledAboutSection>
        {/* Details Here */}
        <p><u>FreeCodeExplorer</u> is a tool developed for new coders who are trying to learn. It will help you select a track, and then filter videos from FreeCodeCamp and other sources according to your needs</p>

        <p>Optionally, you can try out some of the tools and features we're working on</p>

        <p>Some of these features are:</p>
        <ul style={{margin: '0 auto', textAlign:'initial', display:'inline-block'}}>
          <li>Save courses to your queue</li>
          <li>Track progres on courses you've watched</li>
          <li>Offer a KanBan board to track your progress</li>
          <li>Random "video of the day" suggestions</li>
          <li>Challenges, achievements, etc. to gamify your learning experience!</li>
          <li>A forum for learners to share helpful resources</li>
          <li>... and more if desired</li>
        </ul>
      </StyledAboutSection>
    </Container>
  )
}
