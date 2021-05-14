import './App.css';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import ClassPage from './pages/ClassPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Component } from 'react';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/class">class</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/class">
            <ClassPage />
          </Route>
          <Route path="/about-us">
            <AboutUsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Class() {
  return (
    <div>
      <h2>Class</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <h2>Blog</h2>
    </div>
  );
}


export default App;
