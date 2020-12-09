import cursorImg from '../../media/cursor.png';
import { styled, motion, css } from '../../Dependencies';

export const Header1 = styled(motion.h1)`
  padding: 0.5rem;
  margin: 0;
  font-size: 1.5em;
  padding-left: 0;
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  color: ${(props) =>
    props.grayedOut
      ? props.theme.colors.mainGray
      : props.theme.colors.mainBlack};
  color: ${(props) => props.color};
  ${(props) =>
    props.showCursor &&
    css`
      cursor: pointer;
    `}
  @media screen and (max-width: 600px) {
    font-size: 1.3em;
  }
`;

export const Header2 = styled.h2`
  margin: 0;
  color: ${(props) => props.color};
  font-size: 1.5em;
  @media screen and (max-width: 600px) {
    font-size: 1.15em;
  }
`;

export const NavLink = styled(motion.span)`
  padding: 0.5rem;
  margin: 0;
  margin: ${props => props.margin};
  font-size: 1.5em;
  padding-left: 0;
  padding: ${(props) => props.padding};
  text-align: ${(props) => props.textAlign};
  color: ${(props) =>
    props.grayedOut
      ? props.theme.colors.mainGray
      : props.theme.colors.mainBlack};
  color: ${(props) => props.color};
  ${(props) =>
    props.showCursor &&
    css`
      cursor: pointer;
    `}

  font-family: 'Manrope', 'arial';
  font-weight: bold;
  @media screen and (max-width: 600px) {
    font-size: 1.15em;
  }
`;

export const Header3 = styled.h3`
  font-size: 1.15em;
  padding: ${(props) => props.padding};
  @media screen and (max-width: 600px) {
    font-size: 0.85em;
  }
  text-align: ${(props) => props.textAlign};
`;
