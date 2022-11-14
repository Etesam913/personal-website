import { styled, motion } from "Dependencies";

export const Header1 = styled(motion.h1)`
  margin: 0;
  font-size: 1.5em;
  padding: ${(props) => (props.padding ? props.padding : "0 0.5rem 0.5rem 0")};
  text-align: ${(props) => props.textAlign};
  color: ${(props) =>
    props.grayedOut
      ? props.theme.colors.mainGray
      : props.theme.colors.secondary};
  color: ${(props) => props.color};
  transition: color 200ms;
  cursor: ${(props) => props.showCursor && "pointer"};
`;

export const Header2 = styled.h2`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  padding: ${(props) => props.padding};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondary};
  transition: color 200ms;
  font-size: 1.2em;
  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

export const NavLink = styled(motion.span)`
  padding: ${(props) =>
    props.padding ? props.padding : "0.5rem 0.5rem 0.5rem 0"};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  font-size: 1.5em;
  text-align: ${(props) => props.textAlign};
  color: ${(props) =>
    props.grayedOut
      ? props.theme.colors.mainGray
      : props.theme.colors.secondary};

  color: ${(props) => props.color};
  cursor: ${(props) => props.showCursor && "pointer"};
  font-family: "Manrope", "arial", serif;
  font-weight: bold;
  transition: 200ms color;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const Header3 = styled.h3`
  font-size: 1.15em;
  margin: ${(props) => (props.margin ? props.margin : "0.35rem")};
  padding: ${(props) => props.padding};
  @media screen and (max-width: 600px) {
    font-size: 0.85em;
  }
  text-align: ${(props) => props.textAlign};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.secondary};
  transition: color 200ms;
`;
