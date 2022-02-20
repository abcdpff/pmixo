import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Popover } from 'antd';
import logo from './../../assets/image/logo.svg';
import CategoryList from './CategoryList';
import MainList from './MainList';//left submenu
import { navData } from './NavConfig';
import './PrimaryNav.scss';

const Nav = styled.div`
  display: flex;
`;

const Logo = styled.div`
  height: 50px;
  width: 150px;
  background-image: url('${logo}');
  background-size: 100%;
  background-repeat: no-repeat;
  margin-left: 40px;
`;

const NavItems = styled.ul`
  margin-bottom: 0px;
  display: flex;
  list-style-type: none;
`;

const NavItem = styled.li`
  .nav-link {
    color: #111;
    padding: 15px 12px;
  }
`;

const DropdownContainer = styled.div`
  border-top: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  top: 51px;
  width: 100%;
  left: 0;
  // height: 100vh;
  padding: 0px 100px;
  background-color: #fff;
  position: fixed;
  display: flex;
  z-index: 1000;
`;



const PrimaryNav = () => {
  let resultAll = navData.allData.map(({ label, id, categories }) => {
    return (
      <Popover
        transitionName=''
        content={<div>
          {categories.map(({ id }) => {
            return (
              <DropdownContainer>
                <MainList></MainList>
                <CategoryList
                  categories={categories}
                  id={id}
                />
              </DropdownContainer>)
          })}
        </div>}
        key={label} trigger="hover">
        <NavItem>
          <a href="/" className='nav-link'>{label}</a>
        </NavItem>
      </Popover>
    )
  });

  let result = navData.navData.map(({ label, id, categories }) => {
    return (
      <Popover
        transitionName=''
        content={<div>
          {categories.map(({ id }) => {
            return (
              <DropdownContainer>
                <CategoryList
                  categories={categories}
                  id={id}
                />
              </DropdownContainer>)
          })}
        </div>}
        key={label} trigger="hover">
        <NavItem>
          <a href="/" className='nav-link'>{label}</a>
        </NavItem>
      </Popover>
    )
  });

  return (
    <Nav>
      <a href='/home'><Logo /></a>
      <NavItems>
        {resultAll}
        {result}
      </NavItems>
    </Nav>
  )
};

export default PrimaryNav;