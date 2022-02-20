import React from 'react';
import styled from 'styled-components';

const MainListContainer = styled.div`
  margin-right: 30px;
  border-right: 1px solid #f5f5f5;
  flex: 0 0 11.25rem;
`;

const List = styled.ul`
  height: 100%;
  padding: 0px;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 14px 0 13px 10px;
`;

const MainList = () => {
  return (
    <MainListContainer>
      <List>
        <ListItem><a>书桌</a></ListItem>
        <ListItem><a>餐桌</a></ListItem>
        <ListItem><a>茶几</a></ListItem>
        <ListItem><a>床</a></ListItem>
        <ListItem><a>床头柜</a></ListItem>
        <ListItem><a>鞋柜</a></ListItem>
        <ListItem><a>衣柜</a></ListItem>
      </List>
    </MainListContainer>
  )
};
export default MainList;