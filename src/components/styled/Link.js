import cursorImg from '../../media/cursor.png';
import { styled, motion, css } from '../../Dependencies';

export const Link = styled(motion.a)`
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  font-weight: bold;
  font-family: 'Manrope', 'Arial';
  color: ${(props) => props.color};
  font-size: 1.5em;
  @media screen and (max-width: 600px) {
    font-size: 1.15em;
  }
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
      text-decoration-color: ${(props) => props.underlineColor};
    `}
`;
