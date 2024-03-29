import React, { FC } from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-top: 50px;

    @media (min-width: 600px) {
      margin-top: 100px;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 300;
    margin-top: 8px;

    @media (min-width: 600px) {
      font-size: 28px;
    }
  }

  p {
    margin-top: 40px;
    max-width: 600px;
    line-height: 24px;

    @media (min-width: 600px) {
      margin-top: 80px;
      font-size: 20px;
    }
  }
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <h1>Alex Berneau</h1>
      <h2>Front-end JS Developer</h2>
      <p>
        Hello there!
        <br />
        <br />
        I'm Alex, and I mostly do front-end JavaScript development (React, Vue,
        Nuxt, GraphQL, etc.).
        <br />
        If you want to know more about me and what I do, you can check out the informations down below.
        <br />
        <br />
        Contact and networks links at the end of page.
        <br />
        Cheers :).
      </p>
    </StyledHeader>
  );
};

export default Header;
