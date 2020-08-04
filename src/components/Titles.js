import styled from "styled-components";
import { motion } from "framer-motion"; 
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
`;

export const Header2 = styled(Header1)`
  font-size: 1.5em;
`;
export const Header3 = styled(Header2)`
  font-size: 1.15em;
`;
