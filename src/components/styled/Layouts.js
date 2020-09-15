import {styled, motion} from '../../Dependencies'

export const Container = styled(motion.div)`
  position: relative;
  scrollbar-width: none;
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
