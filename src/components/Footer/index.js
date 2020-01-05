import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  margin: 40px 0 80px;

  @media (min-width: 600px) {
    margin: 80px 0 120px;
  }

  ul {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      max-width: 30vw;
      flex-direction: row;
    }

    li:not(:last-child) {
      margin-bottom: 14px;

      @media (min-width: 600px) {
        margin-right: 48px;
      }
    }

    a {
      color: #fee715ff;
      text-decoration: none;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0%;
        width: 100%;
        height: 1px;
        background: gold;
        transform: scaleX(0);
        transform-origin: 0% 50%;
        transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover {
        &::after {
          transform: scaleX(1);
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a href="mailto:alex.berneau@outlook.com">email</a>
        </li>
        <li>
          <a
            href="https://github.com/nothaldir"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/alexberneau/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/nothaldir"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/alex.berneau"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
        </li>
      </ul>
    </StyledFooter>
  );
};

export default Footer;
