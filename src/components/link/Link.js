import React from 'react';
import styled from 'styled-components';

const InnerLink = styled.a`
  color: #61dafb;
`;

const Link = ({url, linkTitle}) => {
  return (
    <InnerLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkTitle}
    </InnerLink>
  );
};

export default Link;
