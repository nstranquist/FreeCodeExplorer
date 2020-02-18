import React, { useState } from 'react'
import uuidv4 from 'uuid/v4'


const watchlistData = {
  videos: [
    {
      id: uuidv4(),
      url: "",
      topic: "React.js",
      extras: [] // tags, categories, etc, anything user wants to add as text can be added here
    }
  ]
}

export const Watchlist = () => {


  return (
    <div>
      
    </div>
  )
}
