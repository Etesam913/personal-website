import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  color: ${props => props.color};
  background: ${props => props.background};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};
  text-align: ${props => props.textAlign};
  border-top: ${props => props.borderTop};

  &.flex {
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    align-items: ${props => props.align || "flex-start"};
    flex-wrap: ${props => props.wrap || "nowrap"};
  }
`;
