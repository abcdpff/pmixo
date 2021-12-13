import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #fff; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #111;
    &:hover { color: #111; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #111;
    margin-left: 16px;
    &:hover { color: #111; }
  }
  .form-center {
    color: #f5f5f5;
    position: absolute !important;
    left: 75%;
    right: 2%;
  }
  .form-control {
    width: 100%;
    background: #f5f5f5;
    border: 1px solid #f5f5f5;
    border-radius: 1.56rem;
    padding-right: 0.5rem;
    font-weight: 700;
    font-size: 13px;
    line-height: 21px;
    outline: none;
  }
  .anticon {
    vertical-align: unset;
  }
`;
const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">PMIXO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Form className="form-center">
        <FormControl type="text" placeholder="查找" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/home">家居</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">办公</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">商用</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">配件</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">技术支持</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/"></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/"><UserOutlined style={{ fontSize: '19px' }} /></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/"><ShoppingCartOutlined style={{ fontSize: '19px' }} /></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;