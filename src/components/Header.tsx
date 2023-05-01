/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Container = styled.div``;

const navStyle = css`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;

  & a {
    text-decoration: none;
  }
`;

function Header() {
  return (
    <Container>
      <nav css={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </Container>
  );
}

export default Header;
