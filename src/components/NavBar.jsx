import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoImg from "../assets/images/logo-2.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const NavBarStyles = styled.nav`
  background: var(--dark-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;

  .logo {
    width: 100px;
  }

  .menu {
    display: none;
    cursor: pointer;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    width: 4rem;

    &:hover path {
      color: white;
    }

    path {
      transition: 0.3s ease-in;
      color: var(--light);
    }

    * {
      pointer-events: none;
    }
  }

  .close {
    display: none;
    position: absolute;
    cursor: pointer;
    right: 1.5rem;
    top: 1.5rem;
    width: 4rem;
    &:hover path {
      color: white;
    }

    &.hidden {
      display: none;
    }
    path {
      transition: 0.3s ease-in;
      color: var(--light);
    }
    * {
      pointer-events: none;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    li {
      padding: 1rem 2rem;

      ::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: white;
        transition: 0.3s ease-in;
      }
      :hover::after {
        width: 100%;
      }

      a {
        display: block;
        color: var(--light);
        text-transform: uppercase;
        font-size: 2rem;

        &.active {
          color: white;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .menu {
      z-index: 999;
      display: block;

      &.hidden {
        display: none;
      }
    }

    .logo {
      width: 80px;
    }

    .close {
      display: block;
    }

    ul {
      position: absolute;
      top: 1rem;
      right: 1rem;
      height: 400px;
      width: 300px;
      padding: 1.5rem 1rem;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      z-index: 999;
      background: #797878;
      border-radius: 15px;
      transition: 0.3s ease-in;

      &.hidden {
        transform: translateY(calc(-100% - 1rem));
      }
    }
  }
`;

export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);

  const navLinks = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Projects", to: "/projects" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <NavBarStyles>
      <div className="logo">
        <img src={LogoImg} alt="logo" />
      </div>
      <div
        className={showNavBar ? "menu hidden" : "menu"}
        onClick={() => setShowNavBar(!showNavBar)}
      >
        <AiOutlineMenu />
      </div>
      <ul className={!showNavBar ? "hidden" : null}>
        <div
          className={!showNavBar ? "close hidden" : "close"}
          onClick={() => setShowNavBar(!showNavBar)}
        >
          <AiOutlineClose />
        </div>
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <NavLink to={navLink.to} onClick={() => setShowNavBar(!showNavBar)}>
              {navLink.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavBarStyles>
  );
}
