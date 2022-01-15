import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 390px) {
      ${props}
    }
  `;
};

export const ipad = (props) => {
  return css`
    @media only screen and (min-width: 390px) and (max-width: 820px) {
      ${props}
    }
  `;
};
