import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterColStyles = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  li {
    margin-bottom: 1rem;
  }

  li a {
    /* Dark mode */
    color: var(--highlight);

    /* Light mode */
    /*color: #12080e;*/
    opacity: 0.8;
    font-size: 1.4rem;
    transition: 0.5s color;
    letter-spacing: 0.2rem;
    /*font-weight: 700;*/
  }

  li a:hover {
    color: var(--light);
  }
`;

export default function FooterCol({
  heading = "col heading",
  links = [
    { type: "link", title: "Home", path: "/home" },
    { type: "link", title: "About", path: "/about" },
  ],
}) {
  return (
    <FooterColStyles className="footer__col">
      <h1>{heading}</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {link.type === "link" ? (
              <Link to={link.path}>{link.title}</Link>
            ) : (
              <a href={link.path} target="_blank" rel="noreferrer">
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </FooterColStyles>
  );
}
