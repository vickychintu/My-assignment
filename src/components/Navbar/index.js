import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  Navlink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img alt="SKYDOC" src={logo} width={130} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <Navlink to="about">About</Navlink>
            </NavItem>
            <NavItem>
              <Navlink to="help">Helpline</Navlink>
            </NavItem>
            <NavItem>
              <Navlink to="service">Our Services</Navlink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
