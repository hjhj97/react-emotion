/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Button = css`
  background-color: gold;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  &:hover {
    opacity: 0.5;
    transition: opacity 0.1s ease-in-out;
    cursor: pointer;
  }
`;

function Home() {
  return (
    <div>
      <button css={Button}>Button</button>
    </div>
  );
}

export default Home;
