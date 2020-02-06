import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from './components/Home'
import { MyNavbar } from './components/layout/Navbar';
import { AllCourses, MyCourses, CourseDetail } from './components/Courses';
import { About } from './components/About';
import { Categories, CategoryDetail } from './components/Categories';
import { NotesList } from './components/Notes'
import { Contribute } from './components/Contribute';

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
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/category/:categoryId" component={CategoryDetail} />
          {/* Experimental Features */}
          <Route exact path="/my/notes" component={NotesList} />
          <Route exact path="/contribute" component={Contribute} />
        </Switch>
      </>
    </BrowserRouter>
    
  );
}

export default App;
