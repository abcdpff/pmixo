import React from 'react';
import styled from 'styled-components';
import PrimaryNav from './PrimaryNav';

const NavContainer = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const Nav = () => {
  return (
    <NavContainer>
      <PrimaryNav />
    </NavContainer>
  );
};

export default Nav;