import React, { useState, useEffect } from 'react'
import request from 'request'
import { Container } from 'react-bootstrap'
import { StyledHeader } from '../../styles/Layout.style'

export const VideosFeed = () => {
  const [videos, setVideos] = useState([])
  const [override, setOverride] = useState(false)
  const [featuredDimensions, setFeaturedDimensions] = useState({ x: "854", y: "480" })

  useEffect(() => {
    if(videos.length < 1 && !override) {
      console.log('api call to youtube videos:')
      request("https://www.googleapis.com/youtube/v3/channelSections", (error, response, body) => {
        console.log('error:', error)
        console.log('response:', response)
        console.log('body:', body)
      })
    }
    // make api call to youtube videos

    // store data in local state
  }, [])

  const getVideoDimensions = () => {
    // look at the screen height, innerWidth, etc, then set x and y

    // setFeaturedDimensions({ x: newX.toString(), y: newY.toString() })

  }

  return (
    <Container>
      <StyledHeader>
        <h1>Curated Videos</h1>
      </StyledHeader>

      <article className="featured-video" style={{textAlign:'center'}}>

      </article>
      

      <section className="videos-section">
        <ul className="videos-list">
          {/* Map over videos data here */}
        </ul>
      </section>
    </Container>
  )
}
