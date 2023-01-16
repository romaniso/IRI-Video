import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../assets/images/logo-2.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const NavBarStyles = styled.nav`
  .wrapper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 100;
    transition: all 0.3s ease 0s;
    background-color: #000;
    &.scrolled {
      background-color: #01010188;
      /*background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 30%,
        rgba(0, 0, 0, 0.091) 70%
      );*/
    }
    &:hover {
      background-color: #000;
    }

    .body {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /*border-bottom: 2px solid #aa915b75;*/
      margin: 0 7rem;
      height: 100px;
      @media (max-width: 1540px) {
        height: 80px;
      }
      @media (max-width: 767.98px) {
        height: 80px;
      }
      .logo {
        max-width: 100px;
        /*margin-bottom: 1rem;*/
      }

      .menu {
        display: none;
        cursor: pointer;
        /*position: absolute;*/
        /*right: 2.2rem;*/
        /*top: 3rem;*/
        width: 3.5rem;
        color: var(--highlight);

        &:hover path {
          color: var(--light);
        }

        path {
          transition: 0.3s ease-in;
          color: var(--highlight);
        }

        * {
          pointer-events: none;
        }
      }

      .close {
        display: none;
        position: absolute;
        cursor: pointer;
        right: 2.2rem;
        top: 3rem;
        width: 4rem;
        color: var(--highlight);
        &:hover path {
          color: var(--light);
        }

        &.hidden {
          display: none;
        }
        path {
          transition: 0.3s ease-in;
          color: var(--highlight);
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
            height: 1px;
            background: var(--light);
            transition: 0.3s ease-in;
          }
          :hover::after {
            width: 100%;
          }

          a {
            display: block;
            color: var(--highlight);
            text-transform: uppercase;
            font-size: 1.2rem;
            letter-spacing: 0.3rem;

            &.active {
              color: var(--light);
            }
          }
        }
      }

      @media only screen and (max-width: 1024px) {
        margin: 1.5rem 3rem;

        .logo {
          width: 100px;
        }

        ul {
          li a {
            font-size: 1.6rem;
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
          /*width: 80px;*/
        }

        .close {
          display: block;
        }

        ul {
          position: absolute;
          top: 1rem;
          right: 1rem;
          height: 450px;
          width: 300px;
          padding: 1.5rem 1rem;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          z-index: 999;
          background: black;
          border: 1px solid var(--highlight);
          border-radius: 10px;
          /* border-radius: 15px; */
          transition: 0.3s ease-in;

          &.hidden {
            transform: translateY(calc(-100% - 1rem));
          }
        }
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

  document.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    header.classList.toggle("scrolled", window.scrollY > 0);
  });

  return (
    <NavBarStyles>
      <div className="wrapper" id="header">
        <div className="body">
          <Link to="/" className="logo">
            <img src={LogoImg} alt="logo" />
          </Link>
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
            {navLinks.map((navLink, index) => {
              // to think how to highlight contact button
              if (navLink.title.toLowerCase() === "contact") {
                return (
                  <li key={index}>
                    <NavLink
                      to={navLink.to}
                      onClick={() => setShowNavBar(!showNavBar)}
                      className="button"
                    >
                      {navLink.title}
                    </NavLink>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <NavLink
                      to={navLink.to}
                      onClick={() => setShowNavBar(!showNavBar)}
                    >
                      {navLink.title}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </NavBarStyles>
  );
}
