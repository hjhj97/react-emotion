/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Home() {
  return (
    <div>
      <button
        css={css`
          background-color: gold;
          border: none;
          padding: 0.5rem;
          border-radius: 0.5rem;
        `}
      >
        Button
      </button>
    </div>
  );
}

export default Home;
