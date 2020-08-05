import styled, {css} from "styled-components";
import { motion } from "framer-motion"; 
import cursorImg from "../media/cursor.png"
export const Header1 = styled(motion.h1)`
  padding: 0.5rem;
  margin: 0;
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
  color: ${props =>
    props.grayedOut
      ? props.theme.colors.mainGray
      : props.theme.colors.mainBlack};
  color: ${props => props.color};
  ${props=>props.cursor && css`
    cursor: url(${cursorImg}) 24 24, pointer;
  `}
  @media screen and (max-width: 600px) {
    font-size: 1.3em
  }
`;

export const Header2 = styled(Header1)`
  font-size: 1.5em;
  @media screen and (max-width: 600px) {
    font-size: 1.15em
  }
`;
export const Header3 = styled(Header2)`
  font-size: 1.15em;
  @media screen and (max-width: 600px) {
    font-size: .85em;
  }
`;
