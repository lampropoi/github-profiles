import {css} from 'styled-components';

export const media = {
  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  computer: (...args) => css`
    @media (min-width: 769px) {
      ${css(...args)}
    }
  `
};
