import { styled, motion, css } from "Dependencies";

export const Link = styled(motion.a)`
  text-decoration: none;
  cursor: pointer;
  margin: 0;
  font-weight: bold;
  font-family: "Manrope", "Arial";
  color: ${(props) => props.color};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5em")};
  @media screen and (max-width: 600px) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.15em")};
  }
  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
      text-decoration-color: ${(props) => props.underlineColor};
    `}
`;

export const Paragraph = styled(motion.p)`
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
