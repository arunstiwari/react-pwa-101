import React from 'react';
import './Link.css';

const Link = ({url, linkTitle}) => {
  return (
    <a
      className="App-link"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkTitle}
    </a>
  );
};

export default Link;
