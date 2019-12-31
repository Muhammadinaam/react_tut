import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

const MainNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div class="container">
          <NavbarBrand tag={Link} to="/">
            React Tutorial
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="categories" className="nav-link" activeClassName="active">Categories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="products" className="nav-link" activeClassName="active">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="orders" className="nav-link" activeClassName="active">Orders</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default MainNav;