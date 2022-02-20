import React from 'react';
import styled from 'styled-components';
import Category from './Category'
const Item = styled.div`
  flex: 1 1 auto;
`;

const NavItem = ({
  categories,
  id,
}) => {
  return (
    <Item>
      {categories.map(({ label }) => {
        return (<Category
          onFocus={() => {
            setFocusedNav(id);
          }}
          label={label} />)
      })}
    </Item>
  )
};

export default NavItem;