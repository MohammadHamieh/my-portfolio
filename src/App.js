import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import NavBar from './components/NavBar';

function App() {
  return (
  <BrowserRouter>
    <Switch>
    <NavBar/>
      <Route component={Home} path="/" exact></Route>
      <Route component={About} path="/about"></Route>
      <Route component={SinglePost} path="/post/:slug"></Route>
      <Route component={Post} path="/post"></Route>
      <Route component={Project} path="/project"></Route>
    </Switch>
  </BrowserRouter>)
}

export default App;
