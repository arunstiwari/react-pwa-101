import React from 'react';
import logo from './GitHub-Mark-64px.png';
import Header from "./components/header/Header";
import Profile from "./containers/profile/Profile";
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

const AppWrapper = styled.div`
 text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <AppWrapper>
        <Header logo={logo}/>
        <Profile/>
      </AppWrapper>
    </>
  );
}

export default App;
