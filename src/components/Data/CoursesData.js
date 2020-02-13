import uuidv4 from 'uuid/v4'

export const coursesData = [
  {
    id: 'dklfjdslfk',
    name: 'First Course',
    duration: 80,
  },
  {
    id: 'sdfjkldkfjd',
    name: 'Data Structures - How to Get Hired at Google',
    duration: 25,
  },
  {
    id: 'eioruecvbpfkj',
    name: 'Epic React Tutorial',
    duration: 240,
  },
  {
    id: 'mcxnvmdnfkjsr',
    name: 'How to be a Beast at AWS',
    duration: 60,
  },
]

export const popularCoursesData = {
  id: 'dkljfdlkfj',
  name: 'Popular Courses',
  publisher: 'freeCodeCamp',
  playlistUrl: "https://www.youtube.com/playlist?list=PLWKjhJtqVAblfum5WiQblKPwIbqYXkDoC",
  numVideos: 9,
  courses: [
    {
      id: uuidv4(),
      name: 'Data Structures Easy to Advanced Course - Full Tutorial from a Google Engineer',
      duration: 483,
      tags: ['Data Structures', 'Course', 'Long'],
      difficulty: 'All Levels',
      year: 2018, // not what's published on freeCodeCamp, but where the OG is from
      url: "https://www.youtube.com/watch?v=RBSGKlAvoiM",
      ogChannel: "https://www.youtube.com/channel/UCD8yeTczadqdARzQUp29PJw",
      description: "Learn and master the most common data structures in this full course from Google engineer William Fiset. This course teaches data structures to beginners using high quality animations to represent the data structures visually.",
    },
    {
      id: uuidv4(),
      name: 'Learn Python - Full Course for Beginners',
      duration: 266,
      tags: ['Python', 'Course'],
      difficulty: 'Beginner',
      year: 2017,
      url: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      ogChannel: "https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw",
      description: "This course will give you a full introduction into all of the core concepts in python. Follow along with the videos and you'll be a python programmer in no time!",
    },
    {
      id: uuidv4(),
      name: 'Learn JavaScript - Full Course for Beginners',
      duration: 206,
      tags: ['JavaScript', 'Course'],
      difficulty: 'Beginner',
      year: 2018,
      url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
      ogChannel: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ", //freeCodeCamp original, Beau Carnes
      description: "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language. The font-size in this tutorial is large, making it perfect for viewing on small screens.",
    },
    {
      id: uuidv4(),
      name: 'APIs for Beginners - How to Use an API',
      duration: 139,
      tags: ['API', "JavaScript", "Python", "REST", "Postman", "Flask", 'Course'],
      difficulty: 'Beginner',
      year: 2019,
      url: "https://www.youtube.com/watch?v=GZvSYJDk-us",
      ogChannel: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ", //FCC original, Craig Dennis
      description: "What is an API? Learn all about APIs (Application Programming Interfaces) in this full tutorial for beginners. You will learn what APIs do, why APIs exist, and the many benefits of APIs. APIs are used all the time in programming and web development so it is important to understand how to use them.",
    },
    {
      id: uuidv4(),
      name: 'Full Ethical Hacking Course - Network Penetration Testing for Beginners',
      duration: 891,
      tags: ['Ethical Hacking', 'Penetration Testing', 'Course', 'Long'],
      difficulty: 'Beginner',
      year: 2019,
      url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
      ogChannel: "https://www.youtube.com/channel/UC0ArlFuFYMpEewyRBzdLHiw",
      description: "Learn network penetration testing / ethical hacking in this full tutorial course for beginners. This course teaches everything you need to know to get started with ethical hacking and penetration testing. You will learn the practical skills necessary to work in the field. Throughout the course, we will develop our own Active Directory lab in Windows, make it vulnerable, hack it, and patch it. We'll cover the red and blue sides. We'll also cover some of the boring stuff like report writing :)."
    },
    {
      id: uuidv4(),
      name: 'Learn Data Science Tutorial - Full Course for Beginners',
      duration: 352,
      tags: ['Data Science', 'Course', 'Long'], // TODO: add language(s) used
      difficulty: 'Beginner',
      year: 2017,
      url: "https://www.youtube.com/watch?v=ua-CiDNNj30",
      ogChannel: "https://www.youtube.com/user/datalabcc",
      description: "Learn Data Science is this full tutorial course for absolute beginners. Data science is considered the \"sexiest job of the 21st century.\" You'll learn the important elements of data science. You'll be introduced to the principles, practices, and tools that make data science the powerful medium for critical insight in business and research. You'll have a solid foundation for future learning and applications in your work. With data science, you can do what you want to do, and do it better. This course covers the foundations of data science, data sourcing, coding, mathematics, and statistics.",
    },
    {
      id: uuidv4(),
      name: 'SQL Tutorial - Full Course for Beginners',
      duration: 260,
      tags: ['SQL', 'Course'],
      difficulty: 'Beginner',
      year: 2017,
      url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
      ogChannel: "https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw", // Mike Dane
      description: "In this course, we'll be looking at database management basics and SQL using the MySQL RDBMS. The course is designed for beginners to SQL and database management systems, and will introduce common database management topics.",
    },
    {
      id: uuidv4(),
      name: 'Learn Java 8 - Full Tutorial for Beginners',
      duration: 572,
      tags: ['Java', 'Course', 'Long', 'Object Oriented Programming'],
      difficulty: 'Beginner',
      year: 2015,
      url: "https://www.youtube.com/watch?v=grEKMHGYyns",
      ogChannel: "https://www.youtube.com/channel/UC0syIz79dzjMXIf5VdJ65EA", // Marcus Biel
      description: "Learn Java 8 and object oriented programming with this complete Java course for beginners.",
    },
    {
      id: uuidv4(),
      name: 'C++ Tutorial for Beginners - Full Course',
      duration: 241,
      tags: ['C++', 'Course'],
      difficulty: 'Beginner',
      year: 2017,
      url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
      ogChannel: "https://www.youtube.com/channel/UCvmINlrza7JHB1zkIOuXEbw", // Mike Dane
      description: "This course will give you a full introduction into all of the core concepts in C++. Follow along with the videos and you'll be a C++ programmer in no time!",
    },
  ]
}