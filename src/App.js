import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from './components/Home'
import { MyNavbar } from './components/layout/Navbar';
import { AllCourses } from './components/Courses';
import { MyCourses } from './components/Courses';
import { CourseDetail } from './components/Courses';
import { About } from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/home" component={HomeView} />
          <Route exact path="/courses" component={AllCourses} />
          <Route exact path="/course/:id" component={CourseDetail} />
          <Route exact path="/my/courses" component={MyCourses} />
          <Route exact path="/about" component={About} />
        </Switch>
      </>
    </BrowserRouter>
    
  );
}

export default App;
