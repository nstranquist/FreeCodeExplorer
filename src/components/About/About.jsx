import React from 'react'

import { Container } from 'react-bootstrap'

export const About = ({

}) => {

  return (
    <Container>
      <header style={{textAlign:'center', padding: '1.5rem 1rem',}}>
        <h2>About</h2>
        <p style={{fontSize:'1rem', fontWeight:300, marginTop:15}}>-- About FreeCodeExplorer --</p>
      </header>
      
      <section style={{width:'66%', margin: '0 auto', textAlign:'center', fontSize:'1.1rem', letterSpacing:'1px', lineHeight:1.5,fontFamily:'sans-serif'}}>
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
      </section>
    </Container>
  )
}
