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
        <p className="about-paragraph"><u>FreeCodeExplorer</u> is a tool developed for new coders who are trying to learn. It will help you select a track, and then filter videos from FreeCodeCamp and other sources according to your needs</p>

        <p className="about-paragraph">Optionally, you can try out some of the tools and features we're working on</p>

        <div style={{textAlign: 'initial', marginTop:40}}>
          <p>Current Features:</p>
          <ul>
            <li>Save courses to your queue</li>
            <li>Daily "featured course" suggestion</li>
            <li>Track your progress on the courses you've watched</li>
            <li>Select a career track, get a learning path to it</li>
            <li>... and more if desired</li>
          </ul>
        </div>
        
        <div style={{textAlign: 'initial'}}>
          <p>Feature Ideas:</p>
          <ul>
            <li>Offer a KanBan board to track your video or project progress</li>
            <li>Random "project idea" suggestions</li>
            <li>Challenges, achievements, etc. to gamify your learning experience!</li>
            <li>Community Resources section (external links)</li>
            <li>A forum for learners to share helpful resources</li>
          </ul>
        </div>
      </StyledAboutSection>
    </Container>
  )
}
