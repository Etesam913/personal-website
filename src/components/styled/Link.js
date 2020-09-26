import cursorImg from '../../media/cursor.png';
import { styled, motion, css } from '../../Dependencies';

export const Link = styled(motion.a)`
  text-decoration: none;
  cursor: url(${cursorImg}) 24 24, pointer;
  
  ${props =>
    props.underline &&
    css`
      text-decoration: underline;
      text-decoration-color: ${props => props.underlineColor};
    `}
`;
