import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 64px;
  pointer-events: none;
`;

const Header = ({logo}) => {
  return (
    <HeaderWrapper>
      <Logo src={logo}  alt="logo" />
      <h1>
        My Github Portfolio
      </h1>
    </HeaderWrapper>
  );
};

export default Header;
