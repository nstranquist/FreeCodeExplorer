import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from './components/Home'
import { MyNavbar } from './components/layout/Navbar';
import { AllCourses, CourseDetail } from './components/Courses';
import { About } from './components/About';
import { Categories, CategoryDetail } from './components/Categories';
import { Contribute } from './components/Contribute';
import { VideosFeed } from './components/Videos';
import { MyView } from './components/MyView'
import { Board } from './components/KanBan/Board';
import { Docs, DocsDetail } from './components/Docs';
import { TagDetail } from './components/Tags/TagDetail';

function App() {
  return (
    <BrowserRouter>
      <>
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={MyView} />
          <Route exact path="/home" component={HomeView} />
          <Route path="/my" component={MyView} />
          <Route exact path="/courses" component={AllCourses} />
          <Route exact path="/course/:id" component={CourseDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/category/:categoryId" component={CategoryDetail} />
          {/* Experimental Features */}
          <Route exact path="/contribute" component={Contribute} />
          <Route exact path="/videos" component={VideosFeed} />
          <Route exact path="/kanban" component={Board} />
          <Route exact path="/docs" component={Docs} />
          <Route exact path="/docs/:faqId" component={DocsDetail} />
          <Route exact path="/tags/:tagId" component={TagDetail} />
        </Switch>
      </>
    </BrowserRouter>
    
  );
}

export default App;
