import React from 'react';
import logo from './GitHub-Mark-64px.png';
import './App.css';
import Header from "./components/header/Header";
import Profile from "./containers/profile/Profile";

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <Profile />
    </div>
  );
}

export default App;
