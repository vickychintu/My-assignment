import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" isOpen={isOpen} onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="about" isOpen={isOpen} onClick={toggle}>
            FAQ
          </SidebarLink>
          <SidebarLink to="about" isOpen={isOpen} onClick={toggle}>
            Helpline
          </SidebarLink>
          <SidebarLink to="about" isOpen={isOpen} onClick={toggle}>
            Consult Doctor
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin" isOpen={isOpen} onClick={toggle}>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
