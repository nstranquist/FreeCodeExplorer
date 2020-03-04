import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/layout';
// import { Home } from './pages/Home'
import { AllCourses, CourseDetail } from './pages/Courses';
import { About } from './pages/About';
import { Categories, CategoryDetail } from './pages/Categories';
import { Contribute } from './pages/Contribute';
import { VideosFeed } from './pages/Videos';
// import { MyView } from './pages/MyView'
import { Board } from './pages/KanBan/Board';
import { Docs, DocsDetail } from './pages/Docs';
import { TagDetail } from './pages/Tags/TagDetail';
import { Explore } from './pages/Explore/Explore';
import asyncComponent from './hocs/asyncComponent';

// Async Route Components
const AsyncComponent = (uri) => asyncComponent(() => {
  console.log('uri of async component:', uri)
  return import(`${uri}`)
})

function App() {
  return (
    <BrowserRouter>
      <>
      {/* QUESTION: how many to asyncLoad and when? */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={AsyncComponent('./pages/MyView')} />
          <Route exact path="/home" component={AsyncComponent('./pages/Home')} />
          <Route path="/my" component={AsyncComponent('./pages/MyView')} />
          {/* <Route exact path="/my/home" component={AsyncComponent('./pages/MyView')} /> */}
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
          <Route exact path="/explore" component={Explore} />
        </Switch>
      </>
    </BrowserRouter>
    
  );
}

export default App;
