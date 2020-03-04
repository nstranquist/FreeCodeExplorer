// import { uuidv4 } from 'uuid'
import uuidv4 from 'uuid/v4'

export const projectsData = [
  {
    id: uuidv4(),
    name: "To-Do List",
    description: "Build an app where todos can be added, edited, and deleted",
    difficulty: "beginner",
    challenges: [
      "add a timestamp for each todo",
      "add a real-time backend",
      "add a category for each todo",
      "allow filtering and searching by category",
    ],
    references: [
      {
        url: "https://www.youtube.com/watch?v=h5crrOsLbpk",
        language: "javascript",
        framework: "react"
      },
      {
        url: "http://google.com",
        language: "rainbow",
        framework: "road",
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Weather App",
    description: "Use an API to display the weather",
    difficulty: "beginner",
    challenges: [
      "allow user to input their location",
      "use device location to detect location",
      "display the user's location on a map (such as MapBox)",
      "allow the user to compare the weather from multiple locations",
      "convert the app into a SnowDay Calculator"
    ],
    references: [
      {
        url: "https://www.youtube.com/watch?v=IxuqmfO6p28",
        language: "javascript",
        framework: "react",
      }
    ]
  }
]