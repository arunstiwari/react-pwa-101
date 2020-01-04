import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;


const List = ({items}) => {
  return (
    <ListWrapper>
      {items.map(item => <ListItem key={item.label}><strong>{item.label}:</strong>{item.value}</ListItem>)}
    </ListWrapper>
  );
};

export default List;
