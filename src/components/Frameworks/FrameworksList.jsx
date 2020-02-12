import React from 'react'
import { frameworksData } from '../Data/FrameworksData'
import { StyledHeader, StyledSubheader } from '../../styles/Layout.style'
import { Link } from 'react-router-dom'

export const FrameworksList = ({

}) => {
  return (
    <section className="frameworks-section">
      <StyledHeader>
        <h1>Popular Frameworks</h1>
        <StyledSubheader>
          Don't see one?
          <Link to="/contribute">Let us know</Link>
          so we can add it to our list!
        </StyledSubheader>
      </StyledHeader>

      <div>
        <ul className="frameworks-list">
          {frameworksData.map(framework => (
            <li className="framework-item">
              Name: {framework.name}
              {framework.description !== "" && <div>description: {framework.description}</div>}
              Language: {framework.language}
              Purpose: {framework.purpose}
              Documentation: {framework.linkToDocumentation}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
