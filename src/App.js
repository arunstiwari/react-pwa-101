import React from 'react';
import logo from './GitHub-Mark-64px.png';
import Header from "./components/header/Header";
import Profile from "./containers/profile/Profile";
import styled from 'styled-components';

const AppWrapper = styled.div`
 text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header logo={logo} />
      <Profile />
    </AppWrapper>
  );
}

export default App;
