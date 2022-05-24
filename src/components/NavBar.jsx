import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";

export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const navLinks = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Projects", to: "/projects" },
    { title: "Contact", to: "/contact" },
  ];

  const StyledNavBar = styled.nav`
    display: flex;
    justify-content: center;
  `;

  return (
    <div className="container">
      <StyledNavBar>
        <div className="menu">
          <AiOutlineMenu />
        </div>
        <ul>
          <div className="close"></div>
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <NavLink to={navLink.to}>{navLink.title}</NavLink>
            </li>
          ))}
        </ul>
      </StyledNavBar>
    </div>
  );
}
